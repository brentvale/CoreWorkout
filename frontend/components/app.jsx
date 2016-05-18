var React = require('react');
var WorkoutForm = require('./workouts/form.jsx').WorkoutForm;
var WorkoutIndex = require('./workouts/index.jsx').WorkoutIndex;

var App = React.createClass({
  render: function(){
    return(
      <div>
        <WorkoutIndex />
      </div>
    )
  }
});

module.exports = {
  App: App
};