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

require 'rails_helper'

RSpec.describe Activity, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
