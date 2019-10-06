
class BoardPin < ApplicationRecord

validates :board_id, presence: true 
validates :pin_id, presence: true 

belongs_to :board 
belongs_to :pin 


end 