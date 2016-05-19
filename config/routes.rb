Rails.application.routes.draw do
  
  devise_for :users
  
  namespace :api do 
    resources :workouts, only: [:index, :new, :create, :show]
  end

  root to: "static_pages#home"
end
