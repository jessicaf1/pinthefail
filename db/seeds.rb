# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Pin.destroy_all 
Board.destroy_all
BoardPin.destroy_all 
User.destroy_all

demouser = User.create(email: 'bwaldorf@aol.com', f_name: 'Blair', l_name: 'Waldorf', password: 'nancy5', description: 'xoxo gossip girl', location: 'nyc')
file = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/blair.jpeg')
demouser.photo.attach(io: file, filename: 'blair.jpeg')
user2 = User.create(email: 'mattsaracen@aol.com', f_name: 'matt', l_name: 'saracen', password: 'football', description: 'qb6', location: 'dillon')

board1 = Board.create(name:'Bad Gossip Girl Relationships', description: 'Characters that should not have been together', user_id: demouser.id)
board2 = Board.create(name: 'Babies', description: 'no thank you', user_id: demouser.id)
board3 = Board.create(name: 'Crossfit bros', description:'ew', user_id: demouser.id)

pin1 = Pin.create(name: 'Blair and Dan')
file1 = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/blairanddan.jpeg')
pin1.photo.attach(io: file1, filename: 'blairanddan.jpeg')

pin11 = Pin.create(name: 'Gross Baby')
file11 = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/gross+baby.jpeg')
pin11.photo.attach(io: file11, filename: 'gross.jpeg')

pin12 = Pin.create(name: 'Another Crossfit dude')
file12 = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/crossfit2.jpeg')
pin12.photo.attach(io: file12, filename:'crossfit2.jpeg')

pin2 = Pin.create(name: 'Chuck and Jenny')
file2 = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/chuckandjenny.jpg')
pin2.photo.attach(io: file2, filename: 'chuckandjenny.jpeg')

pin3 = Pin.create(name: 'Vanessa and Chuck')
file3 = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/vanessaandchuck.jpg')
pin3.photo.attach(io: file3, filename: 'vanessaandchuck.jpeg')

pin4 = Pin.create(name: 'Serena and Tripp')
file4 = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/serenaandtripp.jpg')
pin4.photo.attach(io: file4, filename: 'serenaandtripp.jpeg')

pin13 = Pin.create(name: 'Tire Bro1')
file13 = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/tire+bo.jpg')
pin13.photo.attach(io: file13, filename: 'tire.jpg')

pin10 = Pin.create(name: 'Whiny Baby')
file10 = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/baby2.jpeg')
pin10.photo.attach(io: file10, filename: 'baby2.jpeg')

pin5 = Pin.create(name: 'Rufus and Ivy')
file5 = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/rufusandivy.jpg')
pin5.photo.attach(io: file5, filename: 'rufusandivy.jpeg')

pin14 = Pin.create(name: 'CrossFit Bro')
file14 = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/cf3.jpeg')
pin14.photo.attach(io: file14, filename: 'cf3.jpeg')


pin6 = Pin.create(name: 'Nate and Diana')
file6 = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/nateanddiana.jpg')
pin6.photo.attach(io: file6, filename: 'nateanddiana.jpeg')

pin7 = Pin.create(name: 'Nate and Jenny')
file7 = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/jennyandnate.jpg')
pin7.photo.attach(io: file7, filename: 'nateanddiana.jpeg')

pin8 = Pin.create(name: 'Serena and Dan')
file8 = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/serenaanddan.jpg')
pin8.photo.attach(io: file8, filename: 'nateanddiana.jpeg')

pin9 = Pin.create(name: 'Surprised Baby')
file9 = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/baby1.jpeg')
pin9.photo.attach(io: file9, filename: 'baby1.jpeg')






board_pin1 = BoardPin.create(board_id: board1.id, pin_id: pin1.id)
board_pin2 = BoardPin.create(board_id: board1.id, pin_id: pin2.id)
board_pin3 = BoardPin.create(board_id: board1.id, pin_id: pin3.id)
board_pin4 = BoardPin.create(board_id: board1.id, pin_id: pin4.id)
board_pin5 = BoardPin.create(board_id: board1.id, pin_id: pin5.id)
board_pin6 = BoardPin.create(board_id: board1.id, pin_id: pin6.id)
board_pin7 = BoardPin.create(board_id: board1.id, pin_id: pin7.id)
board_pin8 = BoardPin.create(board_id: board1.id, pin_id: pin8.id)
board_pin9 = BoardPin.create(board_id: board2.id, pin_id: pin9.id)
board_pin10 = BoardPin.create(board_id: board2.id, pin_id: pin10.id)
board_pin11 = BoardPin.create(board_id: board2.id, pin_id: pin11.id)
board_pin12 = BoardPin.create(board_id: board3.id, pin_id: pin12.id)
board_pin13 = BoardPin.create(board_id: board3.id, pin_id: pin13.id)
board_pin14 = BoardPin.create(board_id: board3.id, pin_id: pin14.id)