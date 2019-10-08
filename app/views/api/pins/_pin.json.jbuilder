
  json.extract! pin, :id, :name, :link_url
  if pin.photo.attached?
    json.photoUrl url_for(pin.photo)
  end 
