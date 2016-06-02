// NODE JS:
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
// get the App module
var App = require('./App.js');
// set events:
app.on('ready', App.open);
app.on('activate', function(){
  !App.window && App.open();
});
app.on('window-all-closed', app.quit);
module.exports = app;
