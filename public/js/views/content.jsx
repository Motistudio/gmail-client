const React = require('react');
const Content = React.createClass({
  render: function(){
    return (
      <div className="content">
        This is a test right here!
        <br />
        alive: {JSON.stringify(this.state)}
      </div>
    );
  }
});
module.exports = Content;
