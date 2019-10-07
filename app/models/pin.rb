class Pin < ApplicationRecord

validates :name, presence: true 
has_one_attached :photo

has_many :board_pins 

has_many :boards,
through: :board_pins, 
source: :board 

end 