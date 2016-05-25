var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var WorkoutConstants = require('../constants/workoutConstants.js');
var WorkoutStore = new Store(AppDispatcher);

var _workouts = {};
var _exercises = {};
var _activities = {};

var resetWorkouts = function (workouts) {
  _workouts = {};
  workouts.forEach(function (workout) {
    _workouts[workout.id] = workout;
  });
};

var resetExercises = function (exercises) {
  _exercises = {};
  exercises.forEach(function (exercise) {
    _exercises[exercise.id] = exercise;
  });
};

var resetActivities = function (activities) {
  _activities = {};
  activities.forEach(function (activity) {
    _activities[activity.id] = activity;
  });
};

var addWorkout = function (options) {
  _workouts[options.workout.id] = { workout: options.workout, 
                                    activities: options.activities,
                                    exercises: options.exercises
                          };
};

WorkoutStore.all = function () {
  var workouts = [];
  for (var id in _workouts) {
    workouts.push(_workouts[id]);
  }
  return workouts;
}

WorkoutStore.allExercises = function(){
  var exercises = [];
  for (var id in _exercises){
    exercises.push(_exercises[id]);
  }
  return exercises;
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
      addWorkout({  workout: payload.workout, 
                    activities: payload.activities, 
                    exercises: payload.exercises
                });
      WorkoutStore.__emitChange();
      break;
    case WorkoutConstants.EXERCISES_RECEIVED:
      resetExercises(payload.exercises);
      WorkoutStore.__emitChange();
      break;
  }
}

module.exports = WorkoutStore;