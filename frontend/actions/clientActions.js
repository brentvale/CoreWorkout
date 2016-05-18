var ApiUtil = require('../util/apiUtil.js');

module.exports = {
  fetchAllWorkouts: function() {
    ApiUtil.fetchAllWorkouts();
  },

  createWorkout: function(workout, callback) {
    ApiUtil.createWorkout(workout, callback)
  },

  fetchSingleWorkout: function(id) {
    ApiUtil.fetchSingleWorkout(id);
  },

}
