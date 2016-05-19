// App main module
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
// App static class:
var App = function(){};
App.window = null;
App.dev = false;
App.open = function(options){
  options = options || {};
  App.window = new BrowserWindow(Object.assign({width: 800, height: 600, frame: false}, options));
  App.window.loadURL(__dirname + '/public/index.html');
  App.dev && App.window.webContents.openDevTools();
  App.window.on('close', function(){
    App.window = null;
  });
};
App.close = function(){
  App.window = null;
};
App.quit = function(){
  app.quit();
};
// export
module.exports = App;
