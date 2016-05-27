class Api::WorkoutsController < ApplicationController
  
  def index
    @workouts = current_or_guest_user.workouts.includes(:activities, :exercises, :activity_sets)
    @workout_objects = []
    @workouts.each do |workout|
      obj = {
        workout: workout,
        activities: workout.activities,
        exercises: workout.exercises,
        activitySets: workout.activity_sets
      }
      @workout_objects << obj
    end
    render json: @workout_objects
  end

  def create
    @workout = Workout.new(workout_params)
    @workout.user_id = current_or_guest_user.id
    if @workout.save
      render json: {workout: @workout}
    else
      render json: @workout.errors.full_messages
    end
  end

  def show
    @workout = Workout.includes(:activities, :exercises, :activity_sets).find(params[:id])
    render json: {  workout: @workout, 
                    activities: @workout.activities, 
                    exercises: @workout.exercises,
                    activity_sets: @workout.activity_sets }
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def workout_params
    params.require(:workout).permit(:name, :user_id)
  end
end
