var React = require('react');
var EntryModal = require('./entry_modal.jsx').EntryModal;

var ExerciseItem = React.createClass({
  getInitialState: function(){
    return {entryModalActive: false};
  },
  enterRepValue: function(){
    this.setState({entryModalActive: true});
  },
  closeModal: function(){
    this.setState({entryModalActive: false});
  },
  render: function(){
    return(
      <div className="exerciseItem" onClick={this.enterRepValue}>
        <div>{this.props.exercise.name}</div>
        <div>{this.props.exercise.description}</div>
        <EntryModal />
      </div>
    )
  }
});

module.exports = {
  ExerciseItem: ExerciseItem
}