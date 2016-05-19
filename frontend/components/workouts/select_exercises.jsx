var React = require('react');
var ClientActions = require('../../actions/clientActions.js');

var SelectExercises = React.createClass({
  getInitialState: function(){
    //array of exercise ids
    return {selectedExercises: []};
  },
  handleNext: function(){
    if(this.state.selectedExercises.length == 0){
      console.log("error handling if you don't select any exercises");
    } else {
      var that = this;
      
      ClientActions.createAssociatedActivities(this.state.selectedExercises, function(){
        that.context.router.push("/doCrunches");
      }.bind(this));
    }
  },
  toggleSelected: function(e){
    e.preventDefault();
    var selectedArray = [];

    if(e.target.className.match(/selected/)){
      e.target.className = "exerciseSelectItem";
      this.state.selectedExercises.forEach(function(obj){
        if(obj !== parseInt(e.target.dataset.exerciseid)){
          selectedArray.push(obj);
        }
      });
    } else {
      e.target.className += " selected";
      this.state.selectedExercises.forEach(function(obj){
        selectedArray.push(obj);
      });
      selectedArray.push(parseInt(e.target.dataset.exerciseid));
    }

    this.setState({selectedExercises: selectedArray});
  },
  render: function(){
    //exerciseChoices to come from server
    //eventually want to divide by functional group (top, mid, lower, back, side)
    
    //when replaced, pass exercise.id instead of 'exercise' -> the exercise name
    var exerciseChoices = [ {id: 1, name: "Crunch"},
                            {id: 2, name: "Leg Kicks"},
                            {id: 3, name: "Pushups"},
                            {id: 4, name: "Bicycle"},
                            {id: 5, name: "Supermans"},
                            {id: 6, name: "Side Crunch"},
                            {id: 7, name: "Bridge"} ];
    var that = this;
    
    return(
      <div>
        <ul className="exerciseSelect">
          {exerciseChoices.map(function(exercise, idx){
            return <li className="exerciseSelectItem" key={idx} data-exerciseid={exercise.id} onClick={that.toggleSelected}>{exercise.name}</li>
          })}
        </ul>
        <button onClick={this.handleNext}>Start Workout</button>
      </div>
    )
  }
});

module.exports = {
  SelectExercises: SelectExercises
}