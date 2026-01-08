const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  loadData: () => ipcRenderer.invoke("load-data"),
  saveData: (data) => ipcRenderer.invoke("save-data", data),  // FIXED
  // Synchronous save (blocks until main confirms write)
  saveDataSync: (data) => ipcRenderer.sendSync("save-data-sync", data),
  // Notify renderer when main requests a safe shutdown
  onStartShutdown: (callback) => ipcRenderer.on('start-safe-shutdown', (event, ...args) => { try { callback(...args); } catch (e) { console.error('onStartShutdown callback error', e); } }),
  // Tell main to finalize quit after renderer confirmed save
  confirmShutdown: () => ipcRenderer.send('confirm-shutdown'),
  backupData: () => ipcRenderer.invoke("backup-data"),
  restoreData: () => ipcRenderer.invoke("restore-data"),
});
