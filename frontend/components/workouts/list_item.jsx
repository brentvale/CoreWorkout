var React = require('react');
var NavLink = require('../links/nav_link.jsx').NavLink;

var WorkoutListItem = React.createClass({
  render: function(){
    var that = this;
    var navLinkHref = "/workouts/" + this.props.workout.id;
    return(
      <div>
        <h3>{this.props.workout.name}</h3>
        <p>{this.props.workout.created_at}</p>
        <NavLink to={navLinkHref}>View</NavLink>
      </div>
    )
  }
});

module.exports = {
  WorkoutListItem:WorkoutListItem
};