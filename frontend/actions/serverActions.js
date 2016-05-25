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
      activities: options.activities,
      exercises: options.exercises
    });
  },
  
  receiveCreatedActivitiesWithExercises: function(options){
    Dispatcher.dispatch({
      actionType: WorkoutConstants.WORKOUT_RECEIVED,
      activities: options.activities,
      exercises: options.exercises,
      workout: options.workout
    });
  },
  
  receiveAvailableExercises: function(exercises){
    Dispatcher.dispatch({
      actionType: WorkoutConstants.EXERCISES_RECEIVED,
      exercises: exercises
    });
  },
}
