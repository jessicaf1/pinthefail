
@boards.each do |board|
    
    json.set! board.id do 
        
        json.partial! 'api/boards/board', board: board 
            arr = []
                board.pins.each do |pin|
                    arr << url_for(pin.photo) 
                end 
                # debugger
         json.pinPhotos do 
            json.array! arr
        end  
    end 
end 

