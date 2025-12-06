const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object.
// This is a secure way to create a communication channel between
// your frontend and the backend (main process).
contextBridge.exposeInMainWorld("electronAPI", {
  loadData: () => ipcRenderer.invoke("load-data"),
  saveData: (data) => ipcRenderer.send("save-data", data),
});