var React = require('react');
var WorkoutForm = require('./workouts/form.jsx').WorkoutForm;
var WorkoutIndex = require('./workouts/index.jsx').WorkoutIndex;
var WorkoutForm = require('./workouts/form.jsx').Form;


var App = React.createClass({
  render: function(){
    return(
      <div className="workoutIndex">
        <WorkoutForm />
        <WorkoutIndex />
        {this.props.children}
      </div>
    )
  }
});

module.exports = {
  App: App
};