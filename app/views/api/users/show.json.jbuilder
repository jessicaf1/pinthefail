
json.partial! 'api/users/user', user: @user 

#json.boards @user.boards, partial: 'api/boards/board', as: :board
#json.pins @user.pins, partial: 'api/pins/pin', as: :pin 

json.boards do 
    @user.boards.each do |board|
        json.partial! 'api/boards/board', board: @board 
    end
end

# json.pins do 
#     @user.pins.each do |pin|
#         json.partial! 'api/pins/pin', pin: @pin 
#     end
# end