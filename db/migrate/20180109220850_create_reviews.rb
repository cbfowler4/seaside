class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.references :reviewable, polymorphic: true, index: true
      t.text :body, null: false
      t.integer :rating, null: false
      t.timestamps
    end
  end
end
