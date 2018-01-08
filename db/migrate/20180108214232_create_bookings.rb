class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.integer :renter_id, null: false
      t.integer :house_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.string :status, default: "Pending"

      t.timestamps
    end
  end
end
