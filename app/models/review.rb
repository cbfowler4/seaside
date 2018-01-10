# == Schema Information
#
# Table name: reviews
#
#  id              :integer          not null, primary key
#  reviewable_type :string
#  reviewable_id   :integer
#  body            :text             not null
#  rating          :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Review < ApplicationRecord
  validates :body, :rating, null: false

  belongs_to :reviewable, polymorphic: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
