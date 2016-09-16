var React = require('react');

var AbsDisplay = require('./abs_display.jsx').AbsDisplay;
var WorkoutsIndex = require('./workouts/index.jsx').WorkoutsIndex;

var App = React.createClass({
  render: function(){
    return(
      <div>
        <AbsDisplay />
        <WorkoutsIndex />
      </div>
    )
  }
});

module.exports = {
  App: App
};