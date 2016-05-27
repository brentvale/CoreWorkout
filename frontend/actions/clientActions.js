var ApiUtil = require('../util/apiUtil.js');

module.exports = {
  fetchAllWorkouts: function() {
    ApiUtil.fetchAllWorkouts();
  },

  createWorkout: function(workout, callback) {
    ApiUtil.createWorkout(workout, callback);
  },
  
  createAssociatedActivities: function(options){
    ApiUtil.createAssociatedActivities(options);
  },
  
  fetchAvailableExercises: function(){
    ApiUtil.fetchAvailableExercises();
  },

  fetchSingleWorkout: function(id) {
    ApiUtil.fetchSingleWorkout(id);
  },
  
  createActivitySet: function(options){
    ApiUtil.createActivitySet(options);
  },
  
  fetchCurrentUser: function(){
    ApiUtil.fetchCurrentUser();
  }

}
