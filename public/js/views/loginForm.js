const fs = require('fs')
const path = require('path')

module.exports = Vue.extend({
  template: fs.readFileSync(path.join(__dirname, '../../templates/loginForm.html'), 'utf8'),
  components: {},
  data: {
    test: 'hello world'
  }
})
