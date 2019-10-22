class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save 
      log_in_user(@user)
      render '/api/users/show'
    else
      render json: ['invalid user'], status: 404 
    end 
  end

  def update
    # debugger
    @user = User.find(params[:id]) 
    if @user && @user.update_attributes(user_params)
      # debugger
      render :show 
    else  
      render json: @user.errors.full_messages, status: 422 
    end 
  end

  def index 
    @users = User.all 
  end

  def show 
    @user = User.find(params[:id]) 
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :f_name, :l_name, :location, :description, :photo)
  end

end
