class AnswersController < ApplicationController

  def create
    # binding.pry
    question = Question.find(params[:question_id])
    question.answers.create(user: current_user, body: params[:body])
    # redirect_to "/"
  end

end
