var React = require('react');

var KeyPad = React.createClass({
  getInitialState: function(){
    return {entryValue: " "}
  },
  handleEntry: function(e){
    var newValue = this.state.entryValue + e.currentTarget.dataset.val;
    this.setState({entryValue: newValue})
  },
  handleSubmission: function(e){
    this.props.activitySetEntered(parseInt(this.state.entryValue), this.props.activityId);
  },
  render: function(){
    return(
      <div className="modalKeypad">
        <div className="keyRow">
          <div className="numberBlock">
            <div className="numberKey" onClick={this.handleEntry} data-val={"1"}><p>1</p></div>
          </div>
          <div className="numberBlock">
            <div className="numberKey" onClick={this.handleEntry} data-val={"2"}><p>2</p></div>
          </div>
          <div className="numberBlock">
            <div className="numberKey" onClick={this.handleEntry} data-val={"3"}><p>3</p></div>
          </div>
        </div>
        <div className="keyRow">
          <div className="numberBlock">
            <div className="numberKey" onClick={this.handleEntry} data-val={"4"}><p>4</p></div>
          </div>
          <div className="numberBlock">
            <div className="numberKey" onClick={this.handleEntry} data-val={"5"}><p>5</p></div>
          </div>
          <div className="numberBlock">
            <div className="numberKey" onClick={this.handleEntry} data-val={"6"}><p>6</p></div>
          </div>
        </div>
        <div className="keyRow">
          <div className="numberBlock">
            <div className="numberKey" onClick={this.handleEntry} data-val={"7"}><p>7</p></div>
          </div>
          <div className="numberBlock">
            <div className="numberKey" onClick={this.handleEntry} data-val={"8"}><p>8</p></div>
          </div>
          <div className="numberBlock">
            <div className="numberKey" onClick={this.handleEntry} data-val={"9"}><p>9</p></div>
          </div>
        </div>
        <div className="keyRow">
          <div className="numberBlock zeroRow">
            <div className="numberKey" onClick={this.handleEntry} data-val={"0"}><p>0</p></div>
          </div>
        </div>
        <div className="keyRow">
          <div className="numberBlock zeroRow">
            <div className="entryValue centerBlock">{this.state.entryValue}</div>
          </div>
        </div>
      
        <div className="sideBySideButtons">
          <button onClick={this.props.closeModal}>close</button>
          <button onClick={this.handleSubmission}>Enter</button>
        </div>
      
      </div>
      
    )
  }
});

module.exports = {
  KeyPad: KeyPad
}