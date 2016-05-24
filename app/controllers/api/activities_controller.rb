class Api::ActivitiesController < ApplicationController
  def bulk_create
    @created_activities = []
    params[:exerciseIdsArray].each do |exercise_id|
      @created_activities << Activity.create(workout_id: params[:workout_id].to_i, exercise_id: exercise_id.to_i)
    end
    render json: {activities: @created_activities}
  end

  def index
    render json: "activities index endpoint"
  end

  def create
    render json: "activities create endpoint"
  end

  def show
    render json: "activities show endpoint"
  end

  def update
    render json: "activities update endpoint"    
  end
  
end
