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

