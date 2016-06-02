// App main module
const filestreamer = require('fs');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Mediator = require('./modules/mediator');
// App static class:
var App = function(){};
App.window = null;
App.dev = false;
App.mediator = new Mediator();
Mediator.mediate(App, App.mediator);
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
  window && window.close();
  App.window = null;
};
App.quit = function(){
  app.quit();
};
// Events with store:
const store = require('./stores/store');
store.subscribe(function(){
  if(!store.getState().ui.alive)
    App.close();
});
// export
module.exports = App;
