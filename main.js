const { app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const fs = require('fs')

//写入文件
function writeFile(_, data) {
    fs.writeFileSync('D:/hello.txt', data)
}
//读取文件
function readFile() {
    const res = fs.readFileSync("D:/hello.txt").toString()
    return res
}
 
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences:{
            preload: path.resolve(__dirname,'./preload.js')
        }
    })


    ipcMain.on('file-save', writeFile)
    ipcMain.handle('file-read', readFile)

    win.loadFile('./pages/index.html')

    win.openDevTools()  //自动打开调试窗口

}


app.on('ready', () => {

    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})