class QuestionsController < ApplicationController

  def index
    @questions = Question.order(created_at: :asc)
  end

  def show
    question = Question.find(params[:id])
    @question = question.as_json(methods: [:score, :user], include: {comments: {include: :user}} )
    @answers = question.answers.as_json(methods: [:score, :user], include: {comments: {include: :user}} )
    # @answers = @question.answers.order(best_answer: :desc, created_at: :desc)
    # HOW TO ORDER BY SCORE? I.E., get_score(question)
    # render 'questions/show'
  end

  def new
    require_user
    @question = Question.new
  end

  def edit
    @question = Question.find(params[:id])
    require_matching_user(@question)
  end

  def create
    require_user
    @question = current_user.questions.new(question_params)
    if @question.save
      # tag_array = params[:tags].split(' ')
      # create_tags(tag_array)
      redirect_to '/questions'
    else
      @errors = @question.errors.full_messages
      render 'questions/new'
    end
  end

  def update
    @question = Question.find(params[:id])
    require_matching_user(@question)
    @question.assign_attributes(question_params)
    if @question.save
      redirect_to "/questions/#{@question.id}"
    else
      @errors = @question.errors.full_messages
      render 'questions/edit'
    end
  end

  def destroy
    @question = Question.find(params[:id])
    require_matching_user(@question)
    @question.destroy
    redirect_to "/questions"
  end

private
  def question_params
    params.require(:question).permit(:title, :body)
  end

end
