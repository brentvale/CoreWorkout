var React = require('react');
var WorkoutStore = require('../../stores/workout.js');
var ClientActions = require('../../actions/clientActions.js');

var WorkoutShow = React.createClass({
  getInitialState: function(){
    return {workout: ""};
  },
  _onChange: function(){
    this.setState({workout: WorkoutStore.find(parseInt(this.props.params.workoutId))});
  },
  componentDidMount: function(){
    this.listener = WorkoutStore.addListener(this._onChange);
    var workoutId = parseInt(this.props.params.workoutId);
    var workout = WorkoutStore.find(workoutId);

    if(workout !== undefined){
      this.setState({workout: workout});
    } else {
      ClientActions.fetchSingleWorkout(workoutId);
    }
  },
  componentWillUnmount: function(){
    this.listener.remove();
  },
  render: function(){
    if(this.state.workout == "") {return <div></div>;}
    var workoutName = this.state.workout.name;
    var user_id = this.state.workout.user_id;
    var created_at = this.state.workout.created_at;
    return(
      <div>
        <ul>
          <li>{workoutName}</li>
          <li>{user_id}</li>
          <li>{created_at}</li>
        </ul>
      </div>
    )
  }
});

module.exports = {
  WorkoutShow: WorkoutShow
}