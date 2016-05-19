var React = require('react');
var WorkoutStore = require('../../stores/workout.js');
var ClientActions = require('../../actions/clientActions.js');

var Form = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  
  getInitialState: function(){
    return {workoutName: ""}
  },
  handleChange: function(event){
    this.setState({workoutName: event.target.value})
  },
  createWorkout: function(e){
    e.preventDefault();
    
    var workoutName = this.state.workoutName.trim();

    var workout = {
        "name": workoutName
    };
    
    var that = this;
    
    ClientActions.createWorkout(workout, function(id){
      that.context.router.push("/pickExercises");
    }.bind(this));
    
    this.setState({workoutName: ""});
  },
  render: function(){
    return(
      <form className="workoutForm" onSubmit={this.createWorkout}>
        <span>Workout Name: {this.state.value} </span><br />
        <input type="text" placeholder="name your workout" value={this.state.workoutName} onChange={this.handleChange}></input>
        <input type="submit" value="Post" />
      </form>
    )
  }
  
});

module.exports = {
  Form: Form
};