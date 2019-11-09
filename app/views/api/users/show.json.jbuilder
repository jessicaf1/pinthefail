json.user do 
    json.partial! 'api/users/user', user: @user 
end 
#json.boards @user.boards, partial: 'api/boards/board', as: :board
#json.pins @user.pins, partial: 'api/pins/pin', as: :pin 

json.boards do 
    # debugger
    @user.boards.each do |board|
        json.set! board.id do 
            json.partial! 'api/boards/board', board: board 
        end 
    end
end

json.pins do 
    # debugger
    @user.pins.each do |pin|
        json.set! pin.id do 
            json.partial! 'api/pins/pin', pin: pin 
        end 
    end
end

json.followers do 
    @user.followers.each do |follower|
        json.set! follower.id do 
            json.partial! 'api/users/user', user: follower 
        end
    end 
end 

json.followed_users do 
    @user.followed_users.each do |followed_user|
        json.set! followed_user.id do 
            json.partial! 'api/users/user', user: followed_user   
        end
    end 
end 

