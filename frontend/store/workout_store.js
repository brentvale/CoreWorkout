var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var workoutConstants = require('../constants/workoutConstants.js');
var WorkoutStore = new Store(AppDispatcher);

var _workouts = {};

var resetWorkouts = function (workouts) {
  _workouts = {};
  workouts.forEach(function (workout) {
    _workouts[workout.id] = workout;
  });
};

var resetWorkout = function (workout) {
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
    case workoutConstants.WORKOUTS_RECEIVED:
      resetWorkouts(payload.workouts);
      WorkoutStore.__emitChange();
      break;
    case workoutConstants.workout_RECEIVED:
      resetWorkout(payload.workout);
      WorkoutStore.__emitChange();
      break;
  }
}

module.exports = WorkoutStore;


module.exports = {
  WorkoutStore: WorkoutStore
};