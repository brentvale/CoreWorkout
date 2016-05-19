var ApiUtil = require('../util/apiUtil.js');

module.exports = {
  fetchAllWorkouts: function() {
    ApiUtil.fetchAllWorkouts();
  },

  createWorkout: function(workout, callback) {
    ApiUtil.createWorkout(workout, callback);
  },
  
  createAssociatedActivities: function(idsArray, callback){
    ApiUtil.createAssociatedActivities(idsArray, callback);
  },

  fetchSingleWorkout: function(id) {
    ApiUtil.fetchSingleWorkout(id);
  },

}
