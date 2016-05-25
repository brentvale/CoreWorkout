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

require 'rails_helper'

RSpec.describe ActivitySet, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
