# == Schema Information
#
# Table name: activity_sets
#
#  id          :integer          not null, primary key
#  activity_id :integer
#  reps        :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryGirl.define do
  factory :activity_set do
    activity_id 1
    reps 1
  end
end
