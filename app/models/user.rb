class User < ApplicationRecord
  
attr_reader :password

validates :email, presence: true 
validates :password_digest, presence: true 
validates :session_token, presence: true 
validates :password, length: { minimum: 6, allow_nil: true}
after_initialize :ensure_session_token

def self.find_by_credentials(email, password)
  user = User.find_by(email: email)
  return user if user && user.is_password?(password)
  nil
end

def usernameIs
  username = self.email.split("@")[0]
  self.username = username
  self.save
end

def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end

def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end

def self.generate_session_token 
  SecureRandom::urlsafe_base64(16)
end 

def reset_session_token!
  self.session_token = User.generate_session_token
  self.save!
  self.session_token 
end

private
def ensure_session_token
  self.session_token ||= User.generate_session_token 
end

end 