
class BoardPin < ApplicationRecord

validates :board_id, presence: true 
validates :pin_id, presence: true 
validates_uniqueness_of :board_id, scope: [:pin_id]

belongs_to :board 
belongs_to :pin 


end 