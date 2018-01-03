class AddRoomTypeColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :rooms, :type, :string, null: false
  end
end
