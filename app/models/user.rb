# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  email         :string           not null
#  fname         :string           not null
#  lname         :string           not null
#  host          :boolean          default(FALSE)
#  pwd_digest    :string           not null
#  session_token :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class User < ApplicationRecord
  validates :email, :fname, :lname, :session_token, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  validates :host, inclusion: {in: [true, false]}
  validates :email, uniqueness: true

  after_initialize :ensure_session_token

  attr_reader :password

  def is_password?(pwd)
    BCrypt::Password.new(self.pwd_digest).is_password?(pwd)
  end

  def password=(pwd)
    @password = pwd
    self.pwd_digest = BCrypt::Password.create(pwd)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def self.find_by_credentials(email, pwd)
    user = User.find_by(email: email)
    if user && user.is_password?(pwd)
      user
    else
      nil
    end
  end
end
