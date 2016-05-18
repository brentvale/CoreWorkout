Rails.application.routes.draw do
  
  namespace :api do 
    resources :workouts, only: [:index, :new, :create]
  end

  root to: "static_pages#home"
end
