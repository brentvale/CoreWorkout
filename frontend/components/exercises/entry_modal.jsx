var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
var KeyPad = require('./key_pad.jsx').KeyPad;

var EntryModal = React.createClass({
  getInitialState: function() {
      return { modalIsOpen: false };
  },
  componentWillMount: function() {
      Modal.setAppElement('body');
  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
  afterOpenModal: function() {
    console.log("modal has been opened");
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  render: function() {
      return (
        <div>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            className="entryModal" >
            
            <KeyPad closeModal={this.closeModal} 
                    activitySetEntered={this.props.activitySetEntered}
                    activityId={this.props.activityId}/>
            
          </Modal>
        </div>
      );
    }
});

module.exports = {
  EntryModal: EntryModal
}