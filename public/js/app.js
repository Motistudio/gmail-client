const React = require('react');
const ReactDom = require('react-dom');

const App = require('../../App.js');

// const store = require('../../stores/store');
//
// store.subscribe(function(state){
//   var state = store.getState();
//   if(state.ui.alive)
//     App.quit();
// });

const AppView = require('./views/app.jsx');
ReactDom.render(React.createElement(AppView), document.getElementById('react-root'));
