var Dispatcher = require('../dispatcher/dispatcher.js');
var WorkoutConstants = require('../constants/WorkoutConstants.js');

module.exports = {
  receiveAllWorkouts: function (workouts) {
    Dispatcher.dispatch({
      actionType: WorkoutConstants.WORKOUTS_RECEIVED,
      workouts: workouts
    });
  },

  receiveSingleWorkout: function (workout) {
    Dispatcher.dispatch({
      actionType: WorkoutConstants.WORKOUT_RECEIVED,
      workout: workout
    });
  }
}
