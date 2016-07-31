var React = require('react');
var store = require('../../../stores/store');
module.exports = React.createClass({
  getInitialState: function(){
    let iconClass;
    switch(this.props.type){
      case 'search':
        iconClass = 'fa-search';
        break;
      default:
        iconClass = 'fa-search';
        break;
    }
    return {
      iconClass: iconClass
    };
  },
  buildIconClass: function(){
    const iconClass = this.state.iconClass;
    return 'icon fa' + (iconClass ? ' ' + iconClass : '');
  },
  render: function(){
    return (
      <div className="input-wrapper">
        <input className="input" type="text" placeholder={this.props.placeholder} />
        <span className="icon">
          <i className={this.buildIconClass()}></i>
        </span>
      </div>
    );
  }
});
