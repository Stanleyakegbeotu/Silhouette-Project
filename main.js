const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
const Store = require("electron-store").default;

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      // Since your app is self-contained and doesn't load remote content,
      // these settings are secure.
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js') // Optional: for future use
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile('index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Initialize electron-store
const store = new Store();

// --- IPC Handlers for Data Persistence ---

// Handle request to load data
ipcMain.handle("load-data", () => {
  try {
    // Use electron-store to get data. It handles file path and reading.
    // The key 'appData' can be anything you choose.
    return store.get("appData");
  } catch (error) {
    console.error("Could not read or parse the data file. It might be corrupted.", error);
    // Returning null allows the app to start with a fresh state instead of crashing.
    return null;
  }
});

// Handle request to save data
ipcMain.on("save-data", (event, data) => {
  // Use electron-store to set data. It handles file writing.
  try {
    store.set("appData", data);
  } catch (error) {
    console.error("Failed to save data:", error);
  }
});