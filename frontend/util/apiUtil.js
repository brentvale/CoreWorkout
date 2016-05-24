var ServerActions = require('../actions/serverActions.js');

module.exports = {
  fetchAllWorkouts: function () {
    $.ajax({
      url: "api/workouts",
      method: "GET",
      success: function (workouts) {
        ServerActions.receiveAllWorkouts(workouts);
      },
      error: function(){
        console.log("errored out in the fetchAllWorkouts")
      }
    });
  },

  fetchSingleWorkout: function (id) {
    $.ajax({
      url: "api/workouts/" + id,
      success: function (workoutObj) {
        var workout = workoutObj.workout;
        var activities = workoutObj.activities;
        ServerActions.receiveSingleWorkout({workout: workout, activities: activities});
      }
    });
  },
  
  createAssociatedActivities: function(options){
    $.ajax({
      url: "api/activities/bulk_create",
      method: "POST",
      data: {workout_id: options.workoutId,
            exerciseIdsArray: options.selectedExercises},
      success: function(activitiesObj){
        ServerActions.receiveCreatedActivities(activitiesObj.activities);
        options.callback && options.callback();
      }
    });
  },
  
  fetchAvailableExercises: function(){
    $.ajax({
      type: "GET",
      url: "api/exercises",
      success: function(exercisesObj){
        //send to server actions as an array (for consistency)
        //data returns from api endpoint as exercisesObj {exercises: Array[7]}
        ServerActions.receiveAvailableExercises(exercisesObj.exercises);
      }
    });
  },

  createWorkout: function (workout, callback) {
    $.ajax({
      url: "api/workouts",
      method: "POST",
      data: {workout: workout},
      success: function (workout) {
        ServerActions.receiveSingleWorkout(workout);
        callback && callback(workout.id);
      }
    });
  }
}
