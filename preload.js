console.log("preload")
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('myApi', {
    version: process.version,
    saveFile: (data) => {
        ipcRenderer.send('file-save', data)
    },
    readFile() {
        return ipcRenderer.invoke('file-read')
    }
})