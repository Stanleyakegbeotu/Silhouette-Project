const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  loadData: () => ipcRenderer.invoke("load-data"),
  saveData: (data) => ipcRenderer.invoke("save-data", data),  // FIXED
  backupData: () => ipcRenderer.invoke("backup-data"),
  restoreData: () => ipcRenderer.invoke("restore-data"),
});
