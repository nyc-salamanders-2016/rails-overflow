class AnswersController < ApplicationController

  def create
    # binding.pry
    question = Question.find(params[:question_id])
    answer = question.answers.create(user: current_user, body: params[:body])
    render :json => {answer: answer, user: current_user}
  end

end
