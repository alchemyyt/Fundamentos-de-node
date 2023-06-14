const {app, BrowserWindow} = require('electron');
let mainWindow;
app.on('ready',createWindow)//poner que se ejecute la funcion cuando este listo app de electron
function createWindow() {
  mainWindow = new BrowserWindow({
    width:800,
    height:600,
  });

  mainWindow.loadFile('index.html')
}
