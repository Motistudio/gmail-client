const fs = require('fs')
const path = require('path')

module.exports = Vue.extend({
  el: '#app',
  template: fs.readFileSync(path.join(__dirname, '../../templates/app.html'), 'utf8'),
  components: {
    'app-header': require('./header'),
    'app-content': require('./content')
  },
  data: {
    test: 'hello world'
  }
})
