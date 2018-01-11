class ChangeReviewColumnsModified < ActiveRecord::Migration[5.1]
  def change
    remove_column :reviews, :body
    remove_column :reviews, :rating
    add_column :reviews, :body, :text
    add_column :reviews, :rating, :integer
    add_column :reviews, :modified, :boolean, default: false
  end
end
