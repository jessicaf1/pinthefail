# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Board.destroy_all
Pin.destroy_all 
BoardPin.destroy_all 

demouser = User.create(email: 'bwaldorf@aol.com', f_name: 'Blair', l_name: 'Waldorf', password: 'nancy5', description: 'xoxo gossip girl', location: 'nyc')
file = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/blair.jpeg')
demouser.photo.attach(io: file, filename: 'blair.jpeg')
user2 = User.create(email: 'mattsaracen@aol.com', f_name: 'matt', l_name: 'saracen', password: 'football', description: 'qb6', location: 'dillon')

board1 = Board.create(name:'Bad Gossip Girl Relationships', description: 'Characters that should not have been together', user_id: 1)
board2 = Board.create(name: 'Babies', description: 'no thank you')
board3 = Board.create(name: 'Desserts with fruit', description: 'gross')

pin1 = Pin.new(name: 'Blair and Dan')
file1 = open(https://pinthefail-seeds.s3.us-east-2.amazonaws.com/blairanddan.jpeg)
pin1.photo.attach(io: file1, filename: 'blairanddan')

pin2 = Pin.new(name: 'Chuck and Jenny')
file2 = open(https://pinthefail-seeds.s3.us-east-2.amazonaws.com/chuckandjenny.jpg)
pin2.photo.attach(io: file2, filename: 'chuckandjenny')

pin3 = Pin.new(name: 'Vanessa and Chuck')
file3 = open(https://pinthefail-seeds.s3.us-east-2.amazonaws.com/vanessaandchuck.jpg)
pin3.photo.attach(io: file3, filename: 'vanessaandchuck')

pin4 = Pin.new(name: 'Serena and Tripp')
file4 = open(https://pinthefail-seeds.s3.us-east-2.amazonaws.com/serenaandtripp.jpg)
pin4.photo.attach(io: file4, filename: 'serenaandtripp')

pin5 = Pin.new(name: 'Rufus and Ivy')
file5 = open(https://pinthefail-seeds.s3.us-east-2.amazonaws.com/rufusandivy.jpg)
pin5.photo.attach(io: file5, filename: 'rufusandivy')

pin6 = Pin.new(name: 'Nate and Diana')
file6 = open(https://pinthefail-seeds.s3.us-east-2.amazonaws.com/nateanddiana.jpg)
pin6.photo.attach(io: file6, filename: 'nateanddiana')

pin7 = Pin.new(name: 'Nate and Jenny')
file7 = open(https://pinthefail-seeds.s3.us-east-2.amazonaws.com/jennyandnate.jpg)
pin7.photo.attach(io: file7, filename: 'nateanddiana')

pin8 = Pin.new(name: 'Serena and Dan')
file8 = open(https://pinthefail-seeds.s3.us-east-2.amazonaws.com/serenaanddan.jpg)
pin8.photo.attach(io: file8, filename: 'nateanddiana')

board_pin1 = BoardPin.create(board_id: board1.id, pin_id: pin1.id)
board_pin2 = BoardPin.create(board_id: board1.id, pin_id: pin2.id)
board_pin3 = BoardPin.create(board_id: board1.id, pin_id: pin3.id)
board_pin4 = BoardPin.create(board_id: board1.id, pin_id: pin4.id)
board_pin5 = BoardPin.create(board_id: board1.id, pin_id: pin5.id)
board_pin6 = BoardPin.create(board_id: board1.id, pin_id: pin6.id)
board_pin7 = BoardPin.create(board_id: board1.id, pin_id: pin7.id)
board_pin8 = BoardPin.create(board_id: board1.id, pin_id: pin8.id)
