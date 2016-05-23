class Api::ExercisesController < ApplicationController
  def index
    @exercises = Exercise.all
    render json: {exercises: @exercises}
  end
  
  def create
    
  end
  
  def show
    
  end
  
  def update
    
  end
  
  private 
  
  def exercise_params
    params.require(:exercise).permit(:name, :description, :svg_image_name)
  end

end
