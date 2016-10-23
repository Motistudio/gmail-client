'use strict'
const fs = require('fs')
const path = require('path')

module.exports = Vue.extend({
  template: fs.readFileSync(path.join(__dirname, '../../templates/searchBar.html'), 'utf8'),
  methods: {
  },
  props: {
    placeholder: {
      type: String,
      default: 'Search...'
    }
  },
  data: function(){
    return {
      loading: false
    }
  },
  computed: {
    getPlaceholder: function(){
      return this.props.placeholder
    },
    getLoading: function(){
      return this.props.loading
    }
  }
})
