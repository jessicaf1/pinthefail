class Board < ApplicationRecord

validates :name, presence: true 
validates :description, presence: true 

belongs_to :user 

has_many :board_pins

has_many :pins,
through: :board_pins, 
source: :pin  

has_many :follows, as: :followable

has_many :followers,
    through: :follows,
    source: :follower 

end