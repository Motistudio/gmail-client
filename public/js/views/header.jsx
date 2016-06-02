var React = require('react');
var store = require('../../../stores/store');
module.exports = React.createClass({
  render: function(){
    return (
      <header>
        <div className="logo">
          <div className="symbol">
            <img src="./images/new-google-favicon.svg" />
          </div>
        </div>
        <div className="center">
          <input type="text" placeholder="Search..." />
          <button>
            Search
          </button>
        </div>
        <ul className="window-gestures">
          <li className="minimize" onClick={
            () => {
              store.dispatch({
                type: 'MINIMIZE_APP',
                value: true
              });
            }
          }></li>
          <li className="enlarge" onClick={
            () => {
              store.dispatch({
                type: 'ENLARGE_APP',
                value: true
              });
            }
          }></li>
          <li className="close" onClick={
            () => {
              store.dispatch({
                type: 'CLOSE_APP',
                value: true
              });
            }
          }></li>
        </ul>
      </header>
    );
  }
});
