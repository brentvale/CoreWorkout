# == Schema Information
#
# Table name: activities
#
#  id          :integer          not null, primary key
#  workout_id  :integer          not null
#  exercise_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Activity < ActiveRecord::Base
  belongs_to :exercise
  belongs_to :workout
  
  has_many :activity_sets
end
