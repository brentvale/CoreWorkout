var React = require('react');
var ClientActions = require('../../actions/clientActions.js');
var WorkoutStore = require('../../stores/workout.js');

var SelectExercises = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState: function(){
    //array of exercise ids
    return {selectedExercises: [],
            allExercises: WorkoutStore.allExercises()};
  },
  _onChange: function(){
    this.setState({allExercises: WorkoutStore.allExercises()})
  },
  componentDidMount: function(){
    this.exercisesListener = WorkoutStore.addListener(this._onChange);
    ClientActions.fetchAvailableExercises();
  },
  componentWillUnmount: function(){
    this.exercisesListener.remove();
  },
  handleNext: function(){
    if(this.state.selectedExercises.length == 0){
      console.log("error handling if you don't select any exercises");
    } else {
      var that = this;
      var options = {
        selectedExercises: this.state.selectedExercises,
        callback: function(){
          var urlPath = "/workouts/" + that.props.params.workoutId;
          that.context.router.push(urlPath);
        },
        workoutId: this.props.params.workoutId
      }
      ClientActions.createAssociatedActivities(options);
    }
  },
  toggleSelected: function(e){
    e.preventDefault();
    var selectedArray = [];

    if(e.target.className.match(/selected/)){
      e.target.className = "exerciseSelectItem";
      this.state.selectedExercises.forEach(function(obj){
        if(obj !== parseInt(e.target.dataset.exerciseid)){
          selectedArray.push(parseInt(obj));
        }
      });
    } else {
      e.target.className += " selected";
      //add elements of the current state to the return array first
      this.state.selectedExercises.forEach(function(obj){
        selectedArray.push(parseInt(obj));
      });
      selectedArray.push(parseInt(e.target.dataset.exerciseid));
    }

    this.setState({selectedExercises: selectedArray});
  },
  render: function(){
    if(this.state.allExercises.length == 0){
      return <div></div>;
    }
    var that = this;
    return(
      <div>
        <ul className="exerciseSelect">
          {this.state.allExercises.map(function(exercise, idx){
            return <li className="exerciseSelectItem" key={idx} data-exerciseid={exercise.id} onClick={that.toggleSelected}>{exercise.name}</li>
          })}
        </ul>
        <button onClick={this.handleNext}>Start Workout</button>
      </div>
    )
  }
});

module.exports = {
  SelectExercises: SelectExercises
}