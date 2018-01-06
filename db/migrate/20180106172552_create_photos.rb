class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string name, null: false
      t.references :imageable, polymorphic: true, index: true
      t.timestamps
    end
  end
end
