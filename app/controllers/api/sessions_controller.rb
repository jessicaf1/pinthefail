class Api::SessionsController < ApplicationController

  def create 
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user 
      
      log_in_user(@user)
      
      render 'api/users/show'
    else
      render json: ['invalid username and/or password'], status: 404
    end 
  end

  def destroy 
    @user = current_user 
    
      if @user 
        log_out 
        render 'api/users/show'
      else
        render json: ['no current user']
      end 
  end


end