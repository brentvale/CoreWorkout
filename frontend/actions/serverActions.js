var Dispatcher = require('../dispatcher/dispatcher.js');
var WorkoutConstants = require('../constants/workoutConstants.js');

module.exports = {
  receiveAllWorkouts: function (workouts) {
    Dispatcher.dispatch({
      actionType: WorkoutConstants.WORKOUTS_RECEIVED,
      workouts: workouts
    });
  },

  receiveSingleWorkout: function (options) {
    Dispatcher.dispatch({
      actionType: WorkoutConstants.WORKOUT_RECEIVED,
      workout: options.workout,
      activities: options.activities
    });
  },
  
  receiveCreatedActivities: function(activities){
    Dispatcher.dispatch({
      actionType: WorkoutConstants.ACTIVITIES_RECEIVED,
      activities: activities
    });
  },
  
  receiveAvailableExercises: function(exercises){
    Dispatcher.dispatch({
      actionType: WorkoutConstants.EXERCISES_RECEIVED,
      exercises: exercises
    });
  },
}
