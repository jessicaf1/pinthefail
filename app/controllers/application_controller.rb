class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def ensure_logged_in
    unless @current_user
      render json: { base: ['invalid username and/or password']}, status: 401 
    end 
  end

  def logged_in?
    !!current_user
  end

  def log_in_user(user)
    @current_user = user 
    session[:session_token] = user.reset_session_token!
  end

  def log_out
    
    current_user.reset_session_token!
    session[:session_token] = nil  
    @current_user = nil 
    
  end
  
end
