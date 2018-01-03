class RemoveUniqueFromHostId < ActiveRecord::Migration[5.1]
  def change
    remove_index :rooms, :host_id
    add_index :rooms, :host_id
  end
end
