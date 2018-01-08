# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  renter_id  :integer          not null
#  house_id   :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("Pending")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
