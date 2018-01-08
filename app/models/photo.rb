# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  CreatePhotos       :string           not null
#  imageable_type     :string
#  imageable_id       :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Photo < ApplicationRecord
  has_attached_file :image, styles: { avatar: "64x64>", thumb: "374x260>" }, default_url: ""
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates :title, presence: true

  belongs_to :imageable, polymorphic: true
end
