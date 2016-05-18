class Api::WorkoutsController < ApplicationController
  def index
    @workouts = Workout.all
    render json: @workouts
  end

  def create
    @workout = Workout.new(workout_params)
    if @workout.save
      render json: @workout
    else
      render json: @workout.errors.full_messages
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def workout_params
    params.require(:workout).permit(:name)
  end
end
