var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;

var App = require('./components/app.jsx').App;
var WorkoutIndex = require('./components/workouts/index.jsx').WorkoutIndex;
var WorkoutShow = require('./components/workouts/show.jsx').WorkoutShow;

var routes = (
  <Route path="/">
    <Route path="/workouts" component={App}>
    </Route> 
    <Route path="/workouts/:workoutId" component={WorkoutShow} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router history={HashHistory}>{routes}</Router>,
    document.getElementById('main')
  );
});