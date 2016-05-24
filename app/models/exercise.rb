# == Schema Information
#
# Table name: exercises
#
#  id             :integer          not null, primary key
#  name           :string
#  description    :text
#  svg_image_name :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Exercise < ActiveRecord::Base
  has_many :activities
  has_many :workouts, through: :activities
end
