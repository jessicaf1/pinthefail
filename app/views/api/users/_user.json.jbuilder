
  json.extract! user, :id, :username, :email, :location, :description, :f_name, :l_name
  if user.photo.attached?
     json.photoUrl url_for(user.photo)
  end 