var React = require('react');
var WorkoutStore = require('../../stores/workout.js');
var ClientActions = require('../../actions/clientActions.js');
var ExerciseItem = require('../exercises/list_item.jsx').ExerciseItem;

var WorkoutShow = React.createClass({
  getStateFromStore: function(){
    return {workoutObj: WorkoutStore.find(parseInt(this.props.params.workoutId))}
  },
  getInitialState: function(){
    return this.getStateFromStore();
  },
  _onChange: function(){
    this.setState({workoutObj: WorkoutStore.find(parseInt(this.props.params.workoutId))});
  },
  componentDidMount: function(){
    this.listener = WorkoutStore.addListener(this._onChange);
    var workoutId = parseInt(this.props.params.workoutId);
    var workout = WorkoutStore.find(workoutId);

    if(workout !== undefined){
      this.setState({workoutObj: workout});
    } else {
      ClientActions.fetchSingleWorkout(workoutId);
    }
  },
  componentWillUnmount: function(){
    this.listener.remove();
  },
  render: function(){

    if(this.state.workoutObj == null) {return (<div></div>);}

    return(
      <div>
        <ul className="workoutHeadingDetails">
          <li>{this.state.workoutObj.workout.name}</li>
          <li>{this.state.workoutObj.workout.created_at}</li>
          {this.state.workoutObj.exercises.map(function(exercise){
            return <ExerciseItem key={exercise.id} exercise={exercise}/>
          })}
        </ul>
      </div>
    )
  }
});

module.exports = {
  WorkoutShow: WorkoutShow
}