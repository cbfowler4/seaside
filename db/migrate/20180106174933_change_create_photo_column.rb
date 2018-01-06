class ChangeCreatePhotoColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :photos, :CreatePhotos

    add_column :photos, :title, :string
  end
end
