class ChangeTypeColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :rooms, :type
    add_column :rooms, :room_type, :string, null: false
  end
end
