require 'rails_helper'

RSpec.describe Api::ExercisesController, type: :controller do
  describe "#index" do 
    context "the user has valid credentials" do 
      it "sends a list of exercises" do
      
        FactoryGirl.create_list(:exercise, 10)
        
        get :index
        
        json = JSON.parse(response.body)

        # test for the 200 status-code
        expect(response).to be_success

        # check to make sure the right amount of exercises are returned
        expect(json['exercises'].length.to_i).to eq(10)
      end
    end
    context "the user has invalid credentials" do 
      
    end
  end
  
end
