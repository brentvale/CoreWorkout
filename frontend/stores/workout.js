var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var WorkoutConstants = require('../constants/workoutConstants.js');
var WorkoutStore = new Store(AppDispatcher);

var _workouts = {};
var _exercises = {};
var _activities = {};
var _currentUser = {};

var resetWorkouts = function (workouts) {
  _workouts = {};
  workouts.forEach(function (workoutObj) {
    _workouts[workoutObj.workout.id] = workoutObj;
  });
};

var addCurrentUser = function(currentUser){
  _currentUser = currentUser;
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
  var activitySets = options.activitySets || [];
  _workouts[options.workout.id] = { workout: options.workout, 
                                    activities: options.activities,
                                    exercises: options.exercises,
                                    activitySets: activitySets
                          };
};

var addActivitySetToWorkoutActivity = function (activitySet, workoutId){
  _workouts[workoutId].activities.forEach(function(activity, idx){
    if(activity.id == activitySet.activity_id){
      _workouts[workoutId].activitySets.push(activitySet);
    }
  });
};

WorkoutStore.all = function () {
  var workouts = [];
  for (var idx in _workouts) {
    workouts.push(_workouts[idx]);
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

WorkoutStore.currentUser = function(){
  return _currentUser;
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
                    exercises: payload.exercises,
                    activitySets:payload.activitySets
                });
      WorkoutStore.__emitChange();
      break;
    case WorkoutConstants.EXERCISES_RECEIVED:
      resetExercises(payload.exercises);
      WorkoutStore.__emitChange();
      break;
    case WorkoutConstants.ACTIVITY_SET_RECEIVED:
      addActivitySetToWorkoutActivity(payload.activitySet, payload.workoutId);
      WorkoutStore.__emitChange();
      break;
    case WorkoutConstants.CURRENT_USER_RECEIVED:
      addCurrentUser(payload.currentUser);
      WorkoutStore.__emitChange();
      break;
  }
}

module.exports = WorkoutStore;