json.pins do 
  json.set! @pin.id do  
    json.partial! 'api/pins/pin', pin: @pin
  end 
end 
#json.board_pins @pin.board_pins, partial: 'api/board_pins/board_pin', as: :board_pin

json.boards do 
  @pin.boards.each do |board| 
  json.set! board.id do 
  json.partial! 'api/boards/board', board: board 
  end
end 
end 