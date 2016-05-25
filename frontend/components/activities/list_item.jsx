var React = require('react');

var ActivityItem = React.createClass({
  render: function(){
    
    return(
      <div className="activityItem">
        <div>this.props.activity.workout_id = {this.props.activity.workout_id}</div>
        <div>this.props.activity.exercise_id = {this.props.activity.exercise_id}</div>
      </div>
    )
  }
});

module.exports = {
  ActivityItem: ActivityItem
}