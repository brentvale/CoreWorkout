var React = require('react');
var WorkoutStore = require('../../stores/workout.js');
var WorkoutListItem = require('./list_item.jsx').WorkoutListItem;
var ClientActions = require('../../actions/clientActions.js');


var WorkoutIndex = React.createClass({
  getInitialState: function(){
    return {workouts: WorkoutStore.all()};
  },
  _onChange: function(){
    this.setState({workouts: WorkoutStore.all()});
  },
  componentDidMount: function () {
    this.workoutListener = WorkoutStore.addListener(this._onChange);
    ClientActions.fetchAllWorkouts();
  },
  componentWillUnmount: function () {
    this.workoutListener.remove();
  },
  render: function(){
      
      var workouts =  this.state.workouts.sort(function (a, b) {
                        if (a.created_at < b.created_at) {
                          return 1;
                        }
                        if (a.created_at > b.created_at) {
                          return -1;
                        }
                        return 0;
                      });
      return(
        <ul className="workoutList">
          {
            workouts.map(function(workout, idx){
              return <li key={idx}><WorkoutListItem workout={workout} /></li>
            })
          }
        </ul>
      )
  }
});

module.exports = {
  WorkoutIndex: WorkoutIndex
};