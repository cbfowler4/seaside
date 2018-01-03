class CreateRooms < ActiveRecord::Migration[5.1]
  def change
    create_table :rooms do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.string :address, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :price, null: false
      t.integer :max_guests, null: false
      t.text :description, null: false
      t.integer :beds, null: false
      t.integer :bathrooms, null: false
      t.integer :bedrooms, null: false
      t.string :cancellation, null: false
      t.integer :min_stay, null: false
      t.boolean :kitchen, default: false
      t.boolean :wifi, default: false
      t.boolean :washer, default: false
      t.boolean :dryer, default: false
      t.boolean :gym, default: false
      t.boolean :hot_tub, default: false
      t.timestamps
    end

    add_index :rooms, :host_id, unique: true
  end
end
