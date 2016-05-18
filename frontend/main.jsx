var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render: function(){
    return(
      <h1>React Main Component</h1>
    )
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Main />, document.getElementById('main'));
});