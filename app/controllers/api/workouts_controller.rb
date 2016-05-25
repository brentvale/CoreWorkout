class Api::WorkoutsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @workouts = current_user.workouts
    render json: @workouts
  end

  def create
    @workout = Workout.new(workout_params)
    @workout.user_id = current_user.id
    if @workout.save
      render json: {workout: @workout}
    else
      render json: @workout.errors.full_messages
    end
  end

  def show
    @workout = Workout.includes(:activities, :exercises).find(params[:id])
    render json: {workout: @workout, activities: @workout.activities, exercises: @workout.exercises}
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
