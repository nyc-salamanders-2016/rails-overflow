class Comment < ApplicationRecord
  belongs_to :commentable, polymorphic: true
  has_many :comments, as: :commentable
  belongs_to :user

  validates :body, presence: true
  validate :doesnt_comment_on_itself

  def doesnt_comment_on_itself
    if self.commentable == self
      self.errors << [:commentable, "Can't comment on itself"]
    end
  end

end
