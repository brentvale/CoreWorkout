Rails.application.routes.draw do

  devise_for :users
  
  namespace :api do 
    resources :workouts, only: [:index, :create, :show]
    resources :exercises, only: [:index, :create, :show, :update]
    
    # post 'exercises/bulk_create', :to => 'exercises#bulk_create'
  end
  
  
  root to: "static_pages#home"
end
