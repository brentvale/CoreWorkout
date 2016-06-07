var React = require('react');
var WorkoutForm = require('./workouts/form.jsx').WorkoutForm;
var WorkoutIndex = require('./workouts/index.jsx').WorkoutIndex;
var WorkoutForm = require('./workouts/form.jsx').Form;
var WorkoutStore = require('../stores/workout.js');
var ClientActions = require('../actions/clientActions.js');
var Link = require('react-router').Link;


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
    var currentUser = this.state.currentUser;

    if(Object.keys(currentUser).length === 0 && currentUser.constructor === Object){
      return (<div></div>)
    } else {
      var workoutsIndex = <WorkoutIndex />;
    };
    
    var linkToNewAccount = "";
    if(currentUser.name && currentUser.name == "guest"){
      linkToNewAccount =  <div>
                            <Link to={'/users/sign_up'}>Create Account</Link>
                            <span>To Save Workout Data</span>
                            <br></br>
                          </div>;
    };
    return(
      <div className="workoutIndex">
        {linkToNewAccount}
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