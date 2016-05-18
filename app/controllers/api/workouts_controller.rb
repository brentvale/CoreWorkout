class Api::WorkoutsController < ApplicationController
  def index
    @workouts = Workout.all
    render json: @workouts
  end

  def new
  end

  def create
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
  end
end
