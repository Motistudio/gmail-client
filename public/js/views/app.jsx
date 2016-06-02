var React = require('react');
var store = require('../../../stores/store');
var Header = require('./header.jsx');
var Content = require('./content.jsx');
module.exports = React.createClass({
  render: function(){
    return (
      <div id="app">
        <Header></Header>
        <Content store={store}></Content>
      </div>
    );
  }
});
