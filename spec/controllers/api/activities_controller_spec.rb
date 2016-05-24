require 'rails_helper'

RSpec.describe Api::ActivitiesController, type: :controller do

  describe "POST #bulk_create" do 
    context "the correct parameters are passed from client side" do
      
      it "creates a set of activities" do 
        exercises_count = Activity.count
        exerciseIdsArray = [1, 2, 3]
        
        params = {workout_id: 1, exerciseIdsArray: exerciseIdsArray}
   
        post :bulk_create, params, format: :json
        
        json = JSON.parse(response.body)
        final_count = exercises_count + exerciseIdsArray.length
        
        expect(response).to be_success
        
        expect(json['activities'].length.to_i).to eq(final_count)
      end
      
    end
  end

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #create" do
    it "returns http success" do
      get :create
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #show" do
    it "returns http success" do
      get :show
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #update" do
    it "returns http success" do
      get :update
      expect(response).to have_http_status(:success)
    end
  end

end
