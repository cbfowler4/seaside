# == Schema Information
#
# Table name: bookings
#
#  id           :integer          not null, primary key
#  renter_id    :integer          not null
#  start_date   :date             not null
#  end_date     :date             not null
#  status       :string           default("Pending")
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  room_id      :integer          not null
#  adult_guests :integer          not null
#  child_guests :integer          not null
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

  has_one :review, as: :reviewable

  def isValid?
    if (self.start_date > self.end_date)
      errors.add(:date, "Start date is after end date of booking")
    elsif (self.room.host_id == self.renter.id)
      errors.add(:date, "Cannot book a boat you are captain of!")
    elsif isOverlap
        errors.add(:date, "Booking request overlaps with another confirmed booking")
    elsif (self.start_date < Date.today())
      errors.add(:date, "Booking start date is before current date")
    elsif (self.start_date + self.room.min_stay < self.end_date)
      errors.add(:date, "Booking is does not extend for boats minimum stay length")
    else
      true
    end
  end

  def isOverlap
    self.room.bookings.any? do |booking|
      !(self.start_date >= booking.end_date || self.end_date <= booking.start_date)
    end
  end
end
