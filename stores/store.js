const Redux = require('redux');

const ui = require('./reducers/ui');
const user = require('./reducers/user');

module.exports = Redux.createStore(Redux.combineReducers({
  ui,
  user
}));
