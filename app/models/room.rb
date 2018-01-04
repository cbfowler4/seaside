# == Schema Information
#
# Table name: rooms
#
#  id           :integer          not null, primary key
#  host_id      :integer          not null
#  title        :string           not null
#  address      :string           not null
#  lat          :float            not null
#  lng          :float            not null
#  price        :integer          not null
#  max_guests   :integer          not null
#  description  :text             not null
#  beds         :integer          not null
#  bathrooms    :integer          not null
#  bedrooms     :integer          not null
#  cancellation :string           not null
#  min_stay     :integer          not null
#  kitchen      :boolean          default(FALSE)
#  wifi         :boolean          default(FALSE)
#  washer       :boolean          default(FALSE)
#  dryer        :boolean          default(FALSE)
#  gym          :boolean          default(FALSE)
#  hot_tub      :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Room < ApplicationRecord
  validates :host_id,
            :title,
            :address,
            :lat,
            :lng,
            :price,
            :max_guests,
            :description,
            :beds,
            :bathrooms,
            :bedrooms,
            :cancellation,
            :min_stay,
            :room_type, presence: true

  validates   :kitchen,
              :wifi,
              :washer,
              :dryer,
              :gym,
              :hot_tub, inclusion: { in: [true, false]}

  belongs_to :host,
    foreign_key: :host_id,
    primary_key: :id,
    class_name: :User


  def self.filterRooms(filters)
    bounds = filters['bounds']
    Rooms.where()
    debugger
    puts 'hello'
  end
end
