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
      preload: path.join(__dirname, "preload.js")
    }
  });

  mainWindow.loadFile("index.html");
}

// Ready
app.whenReady().then(createWindow);

// Quit behaviour
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Initialize electron-store
const store = new Store();

// --- SAFE DATA LOAD / SAVE HANDLERS ---

// Load data safely (prevents crash from corrupted file)
ipcMain.handle("load-data", () => {
  try {
    const data = store.get("appData");

    // If file was empty or null, return an empty object instead of crashing frontend
    return data || {};
  } catch (error) {
    console.error("Config file corrupted. Resetting to empty.", error);

    // Delete corrupted file
    store.delete("appData");

    // Return safe empty data
    return {};
  }
});

// Save data safely (prevents corrupted JSON)
ipcMain.on("save-data", (event, data) => {
  try {
    // Remove circular references, functions, etc.
    const clean = JSON.parse(JSON.stringify(data));

    // Save clean JSON data only
    store.set("appData", clean);
  } catch (error) {
    console.error("Failed to save sanitized data:", error);
  }
});

// --- BACKUP & RESTORE HANDLERS ---

// Handle backup request
ipcMain.handle("backup-data", async () => {
  const { filePath } = await dialog.showSaveDialog({
    title: "Save Data Backup",
    defaultPath: `silhouette-backup-${new Date().toISOString().split('T')[0]}.json`,
    filters: [{ name: "JSON Files", extensions: ["json"] }],
  });

  if (filePath) {
    try {
      const data = store.get("appData");
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      return { success: true, path: filePath };
    } catch (error) {
      console.error("Failed to write backup file:", error);
      return { success: false, error: error.message };
    }
  }
  return { success: false };
});

// Handle restore request
ipcMain.handle("restore-data", async (event) => {
  const { response } = await dialog.showMessageBox({
    type: "warning",
    buttons: ["Cancel", "Restore"],
    defaultId: 0,
    title: "Confirm Restore",
    message: "Are you sure you want to restore data from a backup?",
    detail: "This will overwrite ALL current application data. This action cannot be undone.",
  });

  if (response === 1) { // User clicked "Restore"
    const { filePaths } = await dialog.showOpenDialog({
      title: "Select Backup File to Restore",
      properties: ["openFile"],
      filters: [{ name: "JSON Files", extensions: ["json"] }],
    });

    if (filePaths && filePaths.length > 0) {
      const backupData = JSON.parse(fs.readFileSync(filePaths[0], "utf-8"));
      store.set("appData", backupData);
      BrowserWindow.fromWebContents(event.sender).reload();
      return { success: true };
    }
  }
  return { success: false };
});
