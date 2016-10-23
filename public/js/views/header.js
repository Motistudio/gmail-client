'use strict'
const fs = require('fs')
const path = require('path')

const currentWindow = require('electron').remote.getCurrentWindow()

// var SearchBar = require('../components/searchBar');
module.exports = Vue.extend({
  template: fs.readFileSync(path.join(__dirname, '../../templates/header.html'), 'utf8'),
  components: {
    'search-bar': require('../components/searchBar')
  },
  methods: {
    close: function (e) {
      currentWindow.close()
    },
    maximize: function (e) {
      currentWindow.isMaximized() ? currentWindow.unmaximize() : currentWindow.maximize()
    },
    minimize: function (e) {
      currentWindow.minimize()
    }
  },
  data: function () {
    return {
      include: {
        gestures: true,
        search: true,
        logo: true
      }
    }
  }
})
