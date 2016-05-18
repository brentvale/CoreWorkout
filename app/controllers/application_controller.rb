class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  protected
  
  def authenticate_user!
    if user_signed_in?
      super
    else
      redirect_to new_user_session_path, :notice => 'You have to sign in first to keep track of your '
    end
  end
    
end
