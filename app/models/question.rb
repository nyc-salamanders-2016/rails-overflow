class Question < ApplicationRecord
  belongs_to :user
  has_many :answers
  has_many :votes, as: :voteable
  has_many :comments, as: :commentable
  has_many :question_tags
  has_many :tags, through: :question_tags

  validates :title, :body, presence: true
  validates :title, length: { minimum: 2 }
  validates :body, length: { minimum: 5 }
end
