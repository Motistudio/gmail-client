// NODE JS:
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
// get the App module
const App = require('./App.js');
// set events:
app.on('ready', App.open);
app.on('activate', function(){
  !App.window && App.open();
});
app.on('window-all-closed', app.quit);
app.on('restore', App.restore);
app.getApp = () => {
  return App;
}
module.exports = app;
