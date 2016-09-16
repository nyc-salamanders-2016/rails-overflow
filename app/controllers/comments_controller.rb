class CommentsController < ApplicationController

  def create
    if params[:question_id]
      commentable = Question.find(params[:question_id])
    elsif params[:answer_id]
      commentable = Answer.find(params[:answer_id])
    else
      commentable = Comment.find(params[:comment_id])
    end
    comment = commentable.comments.create(user: current_user, body: params[:body])
    render :json => {comment: comment, user: current_user}
  end

end
