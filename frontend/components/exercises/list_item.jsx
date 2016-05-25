var React = require('react');
var EntryModal = require('./entry_modal.jsx').EntryModal;

var ExerciseItem = React.createClass({
  render: function(){
    return(
      <div className="exerciseItem" onClick={this.enterRepValue}>
        <div>{this.props.exercise.name}</div>
        <div>{this.props.exercise.description}</div>
        <ul>
          {this.props.activitySets.map(function(actSet){
            return <li key={actSet.id}>{actSet.reps}</li>
          })}
        </ul>
        <EntryModal activityId={this.props.activityId} workoutId={this.props.workoutId} createActivitySet={this.props.createActivitySet}/>
      </div>
    )
  }
});

module.exports = {
  ExerciseItem: ExerciseItem
}