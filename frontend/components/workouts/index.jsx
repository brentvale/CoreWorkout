var React = require('react');
var ExerciseThumbnail = require('../exercises/thumbnail.jsx').ExerciseThumbnail;


var WorkoutsIndex = React.createClass({
  render: function(){
    var exercises = ["exercise 1","exercise 2","exercise 3","exercise 4","exercise 5", "exercise 6","exercise 7","exercise 8","exercise 9","exercise 10", "exercise 11","exercise 12","exercise 13","exercise 14","exercise 15"];
    return(
      <div className="workout-selection">
        <ul>
          {exercises.map(function(exercise, idx){
            return  <li  className="center-block" 
                        key={idx}>
                          <ExerciseThumbnail exercise={exercise} />
                    </li>;
          })}
        </ul>
      </div>
    )
  }
});

module.exports = {
  WorkoutsIndex: WorkoutsIndex
};