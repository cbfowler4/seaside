class AddChildAdultToBooking < ActiveRecord::Migration[5.1]
  def change
    add_column :bookings, :adult_guests, :integer, null: false
    add_column :bookings, :child_guests, :integer, null: false
  end
end
