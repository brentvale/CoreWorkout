var React = require('react');
var EntryModal = require('./entry_modal.jsx').EntryModal;

var ExerciseItem = React.createClass({
  getInitialState: function(){
    return {entryModalActive: false};
  },
  render: function(){
    return(
      <div className="exerciseItem" onClick={this.enterRepValue}>
        <div>{this.props.exercise.name}</div>
        <div>{this.props.exercise.description}</div>
        <EntryModal activityId={this.props.activityId} workoutId={this.props.workoutId} activitySetEntered={this.props.activitySetEntered}/>
      </div>
    )
  }
});

module.exports = {
  ExerciseItem: ExerciseItem
}