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
      method: "GET",
      success: function (workoutObj) {
        var workout = workoutObj.workout;
        var activities = workoutObj.activities;
        var exercises = workoutObj.exercises;
        
        ServerActions.receiveSingleWorkout({workout: workout, activities: activities, exercises: exercises});
      }
    });
  },
  
  createAssociatedActivities: function(options){
    $.ajax({
      url: "api/activities/bulk_create",
      method: "POST",
      data: {workout_id: options.workoutId,
            exerciseIdsArray: options.selectedExercises},
      success: function(object){
        ServerActions.receiveCreatedActivitiesWithExercises({ activities: object.activities,
                                                              exercises: object.exercises,
                                                              workout: object.workout       });
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
      success: function (workoutObj) {
        ServerActions.receiveSingleWorkout({workout: workoutObj.workout});
        callback && callback(workoutObj.workout.id);
      }
    });
  }
}
