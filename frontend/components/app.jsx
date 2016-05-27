var React = require('react');
var WorkoutForm = require('./workouts/form.jsx').WorkoutForm;
var WorkoutIndex = require('./workouts/index.jsx').WorkoutIndex;
var WorkoutForm = require('./workouts/form.jsx').Form;


var App = React.createClass({
  getInitialState: function(){
    return {currentUser: WorkoutStore.currentUser()};
  },
  _onChange: function(){
    //add WorkoutStore.currentUser
    this.setState({currentUser: WorkoutStore.currentUser()});
  },
  componentDidMount: function(){
    //add fetchCurrentUser to ClientActions
    this.appListener = WorkoutStore.addListener(this._onChange);
    ClientActions.fetchCurrentUser();
  },
  componentWillUnmount: function(){
    this.appListener.remove();
  },
  render: function(){
    return(
      <div className="workoutIndex">
        <WorkoutForm />
        <WorkoutIndex />
        {this.props.children}
      </div>
    )
  }
});

module.exports = {
  App: App
};