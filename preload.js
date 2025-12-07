contextBridge.exposeInMainWorld("electronAPI", {
  loadData: () => ipcRenderer.invoke("load-data"),
  saveData: (data) => ipcRenderer.send("save-data", data),
  backupData: () => ipcRenderer.invoke("backup-data"),
  restoreData: () => ipcRenderer.invoke("restore-data"),
});
