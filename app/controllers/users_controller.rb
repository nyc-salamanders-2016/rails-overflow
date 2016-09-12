class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to '/'
    else
      @errors = user.errors.full_messages
      render 'users/new'
    end
  end

  def login
    return if request.request_method == "GET"

    user = User.find_by(username: params[:LoginInputName])
    if user.authenticate(params[:LoginInputPassword])
      session[:user_id] = user.id
      redirect_to '/'
    else
      user.errors.add :login, "Invalid username or password"
      @errors = user.errors.full_messages
    end
  end

  def logout
    session.clear
    redirect_to '/'
  end

private
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

end

