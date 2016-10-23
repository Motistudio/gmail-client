'use strict'
const fs = require('fs')
const path = require('path')

const currentWindow = require('electron').remote.getCurrentWindow()

// var SearchBar = require('../components/searchBar');
module.exports = Vue.extend({
  template: fs.readFileSync(path.join(__dirname, '../../templates/content.html'), 'utf8'),
  methods: {
  },
  data: {
    name: 'header'
  }
})
