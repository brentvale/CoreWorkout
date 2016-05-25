class Api::ActivitySetsController < ApplicationController
  def index
    
  end
  
  def create
    @activity_set = ActivitySet.new(activity_set_params)
    if @activity_set.save
      @workout_id = @activity_set.activity.workout.id
      render json: {activity_set: @activity_set, workout_id: @workout_id}
    else
      render json: @activity_set.errors.full_messages
    end
  end
  
  private 
  
  def activity_set_params
    params.require(:activity_set).permit(:activity_id, :reps)
  end

end
