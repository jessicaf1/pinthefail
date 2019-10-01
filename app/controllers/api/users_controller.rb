class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save 
      log_in_user(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422 
    end 
  end

  def update
    @user = User.find(params[:id])
    if @user && @user.update_attributes(user_params)
      render :show 
    elsif !@user 
      render json: ['user does not exist']
    else
      render json: @user.errors.full_messages
    end 
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :f_name, :l_name, :location, :description)
  end

end
