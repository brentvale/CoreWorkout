var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var WorkoutConstants = require('../constants/workoutConstants.js');
var WorkoutStore = new Store(AppDispatcher);

var _workouts = {};

var resetWorkouts = function (workouts) {
  _workouts = {};
  workouts.forEach(function (workout) {
    _workouts[workout.id] = workout;
  });
};

var addWorkout = function (workout) {
  _workouts[workout.id] = workout;
};

WorkoutStore.all = function () {
  var workouts = [];
  for (var id in _workouts) {
    workouts.push(_workouts[id]);
  }
  return workouts;
}

WorkoutStore.find = function (id) {
  return _workouts[id];
}

WorkoutStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case WorkoutConstants.WORKOUTS_RECEIVED:
      resetWorkouts(payload.workouts);
      WorkoutStore.__emitChange();
      break;
    case WorkoutConstants.WORKOUT_RECEIVED:
      addWorkout(payload.workout);
      WorkoutStore.__emitChange();
      break;
  }
}

module.exports = WorkoutStore;