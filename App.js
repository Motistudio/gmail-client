// App main module
const filestreamer = require('fs')
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const Mediator = require('./modules/mediator')
const Configuration = require('./modules/configuration')

/**
 * Opens the main window
 */
const openMainWindow = (options = {}) => {
  const windowConf = Configuration.getWindow('main')
  App.window = new BrowserWindow(Object.assign({width: windowConf['width'], height: windowConf['height'], frame: windowConf['frame']}, options))
  App.window.loadURL('file://' + __dirname + '/public/index.html')
  Configuration.get('tools')['devTools'] && App.window.webContents.openDevTools()
  App.window.on('close', function(){
    App.window = null
  })
}

/**
 * Opens login window
 */
const openLoginWindow = (options = {}) => {
  const windowConf = Configuration.getWindow('login')
  App.login = new BrowserWindow(Object.assign({width: windowConf['width'], height: windowConf['height'], frame: windowConf['frame']}, options))
  App.login.loadURL('file://' + __dirname + '/public/login.html')
  Configuration.get('tools')['devTools'] && App.login.webContents.openDevTools()
  App.login.on('close', function(){
    App.login = null
  })
}

// App static class:
const App = class {
  static open (options = {}) {
    openMainWindow(options)
  }
  static test () {
    alert(!!window)
  }
  static close () {
    // window && window.close()
    App.window.close()
    // App.window = null
  }
  static minimize () {
    App.window.minimize()
  }
  static quit () {
    app.quit()
  }
  static restore () {

  }
}
App.mediator = new Mediator()
Mediator.mediate(App, App.mediator)
App.window = null
// export
module.exports = App
