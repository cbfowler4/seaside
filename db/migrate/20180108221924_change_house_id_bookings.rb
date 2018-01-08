class ChangeHouseIdBookings < ActiveRecord::Migration[5.1]
  def change
    remove_column :bookings, :house_id
    add_column :bookings, :room_id, :integer, null: false
  end
end
