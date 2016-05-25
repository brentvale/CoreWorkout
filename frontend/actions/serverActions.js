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
      exercises: options.exercises,
      activitySets: options.activitySets
    });
  },
  
  receiveCreatedActivitiesWithExercises: function(options){
    Dispatcher.dispatch({
      actionType: WorkoutConstants.WORKOUT_RECEIVED,
      activities: options.activities,
      exercises: options.exercises,
      workout: options.workout,
      activity_sets: options.activity_sets
    });
  },
  
  receiveActivitySet: function(options){
    Dispatcher.dispatch({
      actionType: WorkoutConstants.ACTIVITY_SET_RECEIVED,
      activitySet: options.activity_set,
      workoutId: options.workout_id
    });
  },
  
  receiveAvailableExercises: function(exercises){
    Dispatcher.dispatch({
      actionType: WorkoutConstants.EXERCISES_RECEIVED,
      exercises: exercises
    });
  },
}
