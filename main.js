const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const fs = require("fs");
const Store = require("electron-store").default;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// ----------------------------
//   ELECTRON STORE INSTANCE
// ----------------------------
const store = new Store();

// ----------------------------
//   LOAD DATA (SAFE)
// ----------------------------
ipcMain.handle("load-data", () => {
  try {
    const data = store.get("appData");
    return data || {};
  } catch (error) {
    console.error("Data corrupted, resetting:", error);
    store.delete("appData");
    return {};
  }
});

// ----------------------------
//   SAVE DATA (SAFE + awaitable)
// ----------------------------
ipcMain.handle("save-data", async (event, data) => {
  try {
    const clean = JSON.parse(JSON.stringify(data));
    store.set("appData", clean);
    return { success: true }; // allow await
  } catch (error) {
    console.error("Failed to save sanitized data:", error);
    return { success: false, error: error.message };
  }
});

// ----------------------------
//   BACKUP HANDLER
// ----------------------------
ipcMain.handle("backup-data", async () => {
  const { filePath } = await dialog.showSaveDialog({
    title: "Save Data Backup",
    defaultPath: `silhouette-backup-${new Date().toISOString().split("T")[0]}.json`,
    filters: [{ name: "JSON Files", extensions: ["json"] }],
  });

  if (filePath) {
    try {
      const data = store.get("appData") || {};
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      return { success: true, path: filePath };
    } catch (error) {
      console.error("Failed to write backup:", error);
      return { success: false, error: error.message };
    }
  }

  return { success: false };
});

// ----------------------------
//   RESTORE HANDLER
// ----------------------------
ipcMain.handle("restore-data", async (event) => {
  const { response } = await dialog.showMessageBox({
    type: "warning",
    buttons: ["Cancel", "Restore"],
    defaultId: 0,
    title: "Confirm Restore",
    message: "Are you sure you want to restore data?",
    detail: "This will overwrite all current application data.",
  });

  if (response === 1) {
    const { filePaths } = await dialog.showOpenDialog({
      title: "Select Backup File",
      properties: ["openFile"],
      filters: [{ name: "JSON Files", extensions: ["json"] }],
    });

    if (filePaths && filePaths.length > 0) {
      try {
        const backupData = JSON.parse(fs.readFileSync(filePaths[0], "utf-8"));
        store.set("appData", backupData);

        BrowserWindow.fromWebContents(event.sender).reload();
        return { success: true };
      } catch (error) {
        console.error("Restore failed:", error);
        return { success: false, error: error.message };
      }
    }
  }

  return { success: false };
});
