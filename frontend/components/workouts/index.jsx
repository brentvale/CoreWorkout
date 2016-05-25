var React = require('react');
var WorkoutStore = require('../../stores/workout.js');
var WorkoutListItem = require('./list_item.jsx').WorkoutListItem;
var ClientActions = require('../../actions/clientActions.js');


var WorkoutIndex = React.createClass({
  getInitialState: function(){
    return {workoutsObj: WorkoutStore.all()};
  },
  _onChange: function(){
    this.setState({workoutsObj: WorkoutStore.all()});
  },
  componentDidMount: function () {
    this.workoutListener = WorkoutStore.addListener(this._onChange);
    ClientActions.fetchAllWorkouts();
  },
  componentWillUnmount: function () {
    this.workoutListener.remove();
  },
  render: function(){
      var wObjExists = false
      for(var i in this.state.workoutsObj){
        wObjExists = true;
      }
      if(!wObjExists){
        console.log("wObjExists is false")
        return (<div></div>);
      }

      var workouts =  this.state.workoutsObj.sort(function (a, b) {
                        if (a.workout.created_at < b.workout.created_at) {
                          return 1;
                        }
                        if (a.workout.created_at > b.workout.created_at) {
                          return -1;
                        }
                        return 0;
                      });           
         
      return(
        <ul className="workoutList">
          {
            workouts.map(function(workoutObj, idx){
              return <li key={idx}><WorkoutListItem workout={workoutObj.workout} /></li>
            })
          }
        </ul>
      )
  }
});

module.exports = {
  WorkoutIndex: WorkoutIndex
};