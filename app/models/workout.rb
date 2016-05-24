# == Schema Information
#
# Table name: workouts
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

class Workout < ActiveRecord::Base
  belongs_to :user
  
  has_many :activities
  has_many :exercises, through: :activities
end
