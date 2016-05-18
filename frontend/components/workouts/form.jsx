var React = require('react');
var WorkoutStore = require('../../store/workout_store').WorkoutStore;

var Form = React.createClass({
  getInitialState: function(){
    return {value: ""}
  },
  handleChange: function(event){
    this.setState({value: event.target.value})
  },
  createWorkout: function(e){
    debugger
    e.preventDefault();
    var workout = {
      workout: {
        name: e.target.value
      }
    };
    ClientActions.createWorkout(workout);
  },
  render: function(){
    return(
      <div>
        <span>Workout Name: {this.state.value} </span><br />
        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        <button onClick={this.createWorkout}>Create Workout</button>
      </div>
    )
  }
  
});

module.exports = {
  Form: Form
};