'use strict'

// client modules:
const Authentication = require('./js/modules/authentication')

// views:
const AppView = require('./js/views/app')
const LoginView = require('./js/views/login')

// private vars:
const isLoginView = Authentication.isLogged()
let mainView

window.addEventListener('load', function(){
  mainView = new LoginView({
    el: '#app',
    data: {
      message: Authentication.isLogged() ? 'user is in' : 'user is out',
      loading: false
    }
  })
})
