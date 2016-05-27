var React = require('react');
var WorkoutForm = require('./workouts/form.jsx').WorkoutForm;
var WorkoutIndex = require('./workouts/index.jsx').WorkoutIndex;
var WorkoutForm = require('./workouts/form.jsx').Form;
var WorkoutStore = require('../stores/workout.js');
var ClientActions = require('../actions/clientActions.js');


var App = React.createClass({
  getInitialState: function(){
    return {currentUser: WorkoutStore.currentUser()};
  },
  _onChange: function(){
    this.setState({currentUser: WorkoutStore.currentUser()});
  },
  componentDidMount: function(){
    this.appListener = WorkoutStore.addListener(this._onChange);
    ClientActions.fetchCurrentUser();
  },
  componentWillUnmount: function(){
    this.appListener.remove();
  },
  render: function(){
    var obj = this.state.currentUser;

    if(Object.keys(obj).length === 0 && obj.constructor === Object){
      return (<div></div>)
    } else {
      var workoutsIndex = <WorkoutIndex />;
    }

    return(
      <div className="workoutIndex">
        <WorkoutForm />
        {workoutsIndex}
        {this.props.children}
      </div>
    )
  }
});

module.exports = {
  App: App
};