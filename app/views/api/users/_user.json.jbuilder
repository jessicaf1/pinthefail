
  json.extract! user, :id, :username, :email, :location, :description, :f_name, :l_name, :followed_user_ids, :followed_board_ids, :follower_ids
  if user.photo.attached?
     json.photoUrl url_for(user.photo)
  end 





