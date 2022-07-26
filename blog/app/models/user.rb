class User < ApplicationRecord
  require "securerandom"

  has_secure_password

  validates :email, presence:true, uniqueness: true
  validates :username, presence: true
  validates :password, presence: true

  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy
end
