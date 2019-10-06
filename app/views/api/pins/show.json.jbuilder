json.partial! 'api/pins/pin', pin: @pin

#json.board_pins @pin.board_pins, partial: 'api/board_pins/board_pin', as: :board_pin