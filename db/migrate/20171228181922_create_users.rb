class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.boolean :host, default: false
      t.string :pwd_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end
