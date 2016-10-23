const fs = require('fs')
const path = require('path')

module.exports = Vue.extend({
  template: fs.readFileSync(path.join(__dirname, '../../templates/login.html'), 'utf8'),
  components: {
    'login-header': require('./header'),
    'login-form': require('./loginForm')
  },
  data: {
    test: 'hello world',
    loading: false
  }
})
