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
    })
  },

  fetchSingleWorkout: function (id) {
    $.ajax({
      url: "api/workouts/" + id,
      success: function (workout) {
        ServerActions.receiveSingleWorkout(workout);
      }
    })
  },
  
  createAssociatedActivities: function(exerciseIdsArray, callback){
    $.ajax({
      url: "api/exercises/bulk_create",
      method: "POST",
      data: {exerciseIdsArray},
      success: function(resp){
        console.log("create associated activities");
      }
    })
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
    })
  }
}
