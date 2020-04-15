json.partial! 'api/boards/board', board: @board 

#json.pins @board.pins, partial: 'api/pins/pin', as: :pin

#json.board_pins @board.board_pins, partial: 'api/board_pins/board_pin', as: :board_pin

# json.pins do 
#     @board.pins.each do |pin|
#         # debugger
#         json.partial! 'api/pins/pin', pin: pin
#         # debugger

#     end 
# end

    arr = []
        @board.pins.each do |pin|
            arr << url_for(pin.photo) 
            end 
              # debugger
         json.pinPhotos do 
            json.array! arr
         end 