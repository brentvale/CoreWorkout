class Api::UsersController < ApplicationController
  def fetch_user
    @current_user = current_or_guest_user
    render json: {current_user: @current_user}
  end
end
