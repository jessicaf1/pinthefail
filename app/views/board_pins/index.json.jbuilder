@board_pins.each do |board_pin|
   json.partial! 'api/board_pins/board_pin', board_pin: @board_pin
end 