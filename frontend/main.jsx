var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;

var App = require('./components/app.jsx').App;
var WorkoutIndex = require('./components/workouts/index.jsx').WorkoutIndex;
var WorkoutShow = require('./components/workouts/show.jsx').WorkoutShow;
var SelectExercises = require('./components/workouts/select_exercises.jsx').SelectExercises;
var ViewExercises = require('./components/workouts/view_exercises.jsx').ViewExercises;

var routes = (
  <Route path="/">
    <Route path="/workouts" component={App} />
    <Route path="/workouts/:workoutId" component={WorkoutShow} />
    <Route path="/pickExercises" component={SelectExercises} />
    <Route path="/doCrunches" component={ViewExercises} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router history={HashHistory}>{routes}</Router>,
    document.getElementById('main')
  );
});