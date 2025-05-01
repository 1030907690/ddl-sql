console.log("preload")
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('myApi',{
    version:  process.version
})