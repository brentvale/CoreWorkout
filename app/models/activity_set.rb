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

class ActivitySet < ActiveRecord::Base
  belongs_to :activity
end
