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
      var urlPath = "/pickExercises/" + id;
      that.context.router.push(urlPath);
    }.bind(this));
    
    this.setState({workoutName: ""});
  },
  render: function(){
    return(
      <div className="workoutFormContainer">
        <form className="workoutForm" onSubmit={this.createWorkout}>
          <span>Create New Workout: {this.state.workoutName} </span><br />
          <input type="text" placeholder="name your workout" value={this.state.workoutName} onChange={this.handleChange}></input>
          <input type="submit" value="Next ->" />
        </form>
      </div>
    )
  }
  
});

module.exports = {
  Form: Form
};