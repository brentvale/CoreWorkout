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
  createActivitySet: function(value, activityId){
    //create rails api endpoint for activity sets
    ClientActions.createActivitySet({ reps: value, 
                                      activityId: activityId });
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

    var workoutId = this.state.workoutObj.workout.id;
    var that = this;
    
    this.state.workoutObj.exercises.forEach(function(obj){
      //BEWARE THE N^2
      that.state.workoutObj.activities.forEach(function(activity){
        if(activity.exercise_id == obj.id){
          obj["activity_id"] = activity.id;
          
          //N^3 NO NO NO NO NO NO NO NO
          obj["activitySets"] = [];
          that.state.workoutObj.activitySets.forEach(function(activitySet){
            if(activitySet.activity_id == activity.id){
              obj["activitySets"].push(activitySet);
            }
          })
        }
      });
    });

    return(
      <div>
        <ul className="workoutHeadingDetails">
          <li>{this.state.workoutObj.workout.name}</li>
          <li>{this.state.workoutObj.workout.created_at}</li>
          {this.state.workoutObj.exercises.map(function(exercise){
            return <ExerciseItem  key={exercise.id} 
                                  exercise={exercise} 
                                  workoutId={workoutId} 
                                  activityId={exercise.activity_id}
                                  createActivitySet={that.createActivitySet}
                                  activitySets={exercise.activitySets}/>
          })}
        </ul>
      </div>
    )
  }
});

module.exports = {
  WorkoutShow: WorkoutShow
}