json.partial! 'api/boards/board', board: @board 

#json.pins @board.pins, partial: 'api/pins/pin', as: :pin

#json.board_pins @board.board_pins, partial: 'api/board_pins/board_pin', as: :board_pin

json.pins do 
    @board.pins.each do |pin|
        json.partial! 'api/pins/pin', pin: pin
    end 
end