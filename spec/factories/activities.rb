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

FactoryGirl.define do
  factory :activity do
    workout_id 1
    exercise_id 1
  end
end
