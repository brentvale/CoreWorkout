Rails.application.routes.draw do

  devise_for :users, controllers: { sessions: 'users/sessions' }
  
  namespace :api do 
    resources :workouts, only: [:index, :create, :show]
    resources :exercises, only: [:index, :create, :show, :update]
    resources :activities, only: [:index, :create, :show, :update]
    resources :activity_sets, only: [:index, :create, :show, :update]
    resources :users, only: [:current_user]
    
    get 'users/fetch_user', :to => 'users#fetch_user'
    
    post 'activities/bulk_create', :to => 'activities#bulk_create'
  end
  
  root to: "static_pages#home"
end
