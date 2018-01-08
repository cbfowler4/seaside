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

class Booking < ApplicationRecord
  validates :renter_id, :room_id, :start_date, :end_date, presence: true
  validate :isValid?

  belongs_to :renter,
  foreign_key: :renter_id,
  class_name: :User

  belongs_to :room,
  foreign_key: :room_id,
  class_name: :Room

  def isValid?
    if (self.start_date < self.end_date) && (self.room.host_id != self.renter.id)
      if isOverlap
        errors.add(:date, "Booking request overlaps with another confirmed booking")
      end
    else
      errors.add(:date, "Start date is after end date of booking")
    end
  end

  def isOverlap
    debugger
    self.room.bookings.any? do |booking|
      !(self.start_date >= booking.end_date || self.end_date <= booking.start_date)
    end
  end
end
