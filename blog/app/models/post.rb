class Post < ApplicationRecord
  validates :title, :body, presence: true
  has_many :comments, dependent: :destroy
  #has_one :post_image, dependent: :destroy
  belongs_to :user
  has_one_attached :post_image

  scope :has_attached_image, -> { joins(:post_image) }


end
