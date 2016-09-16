var React = require('react');

var ExerciseThumbnail = React.createClass({
  handleCheck: function(event){
    console.log(event.target.val);
  },
  render: function(){
    return(
      <div className="box-with-shadow">
        <input type="checkbox" onClick={this.handleCheck}/>{this.props.exercise}
      </div>
    )
  }
});

module.exports = {
  ExerciseThumbnail: ExerciseThumbnail
}