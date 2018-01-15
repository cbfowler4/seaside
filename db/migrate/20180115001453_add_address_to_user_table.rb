class AddAddressToUserTable < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :city, :string, null: false
    add_column :users, :state, :string, null: false
  end
end
