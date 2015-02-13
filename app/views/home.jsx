var React = require('react');

var MyView = React.createClass({
  render: function(){
    return (
      <div>
        Are you a...
        <button>Doctor</button>
        <button>Rep</button>
        ?
      </div>
    );
  }
});

module.exports = MyView;
