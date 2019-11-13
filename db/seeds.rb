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
Follow.destroy_all
User.destroy_all

demouser = User.create(email: 'bwaldorf@aol.com', f_name: 'Blair', l_name: 'Waldorf', password: 'nancy5', description: 'xoxo gossip girl', location: 'nyc')
file = open('https://pinthefail-seeds2.s3.amazonaws.com/blair.jpeg')
demouser.photo.attach(io: file, filename: 'blair.jpeg')

user2 = User.create(email: 'mattsaracen@aol.com', f_name: 'matt', l_name: 'saracen', password: 'football', description: 'qb6', location: 'dillon')
filem = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/matt2.jpg')
user2.photo.attach(io: filem, filename: 'mattsar.jpg')

user3 = User.create(email: 'jennamaroney@tgs.com', f_name: 'Jenna', l_name: 'Maroney', password:'jennajenna', description: 'on camera', location: '30 rock')
filej = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/jennam.png')
user3.photo.attach(io: filej, filename: 'jennam.png')

user4 = User.create(email: 'grocerystorejoe@gmail.com', f_name:'Grocer', l_name: 'Joe', password:'bachelorettesux', description: 'im joe the grocer', location:'trader joes')
fileg = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/GSJ.jpeg')
user4.photo.attach(io: fileg, filename: 'GSJ.jpeg')

user5 = User.create(email: 'leslieknope@yahoo.com', f_name: 'leslie', l_name: 'knope', password: 'adamscott', description: 'waffle', location: 'pawnee')
filel = open('https://pinthefail-seeds.s3.us-east-2.amazonaws.com/lesliek.jpg')
user5.photo.attach(io: filel, filename: 'lesliek.jpg')

user6 = User.create(email: 'sabrinateenwitch@hotmail.com', f_name: 'sabrina', l_name: 'spellman', password: 'rememberlibby', description: 'witchy', location: 'linen closet')



board1 = Board.create(name:'Bad Gossip Girl relationships', description: 'Characters that should not have been together', user_id: demouser.id)
board2 = Board.create(name: 'Babies', description: 'no thank you', user_id: demouser.id)
board3 = Board.create(name: 'Crossfit bros', description:'ew', user_id: demouser.id)
board4 = Board.create(name: 'Girls pretending to eat', description:'yeah right', user_id: demouser.id)
board5 = Board.create(name: 'Cats', description:'scary', user_id: demouser.id)

pin20= Pin.create(name: 'Two More Baby')
file20 = open('https://pinthefail-seeds2.s3.amazonaws.com/babyanother.jpeg')
pin20.photo.attach(io: file20, filename: 'babyanother.jpeg')

pin18 = Pin.create(name: 'Hot Girl 4')
file18 = open('https://pinthefail-seeds2.s3.amazonaws.com/hotg4.png')
pin18.photo.attach(io: file18, filename: 'hotg4.png')



pin1 = Pin.create(name: 'Blair and Dan')
file1 = open('https://pinthefail-seeds2.s3.amazonaws.com/blairanddan.jpeg')
pin1.photo.attach(io: file1, filename: 'blairanddan.jpeg')


pin22 = Pin.create(name: 'Cat 1')
file22 = open('https://pinthefail-seeds2.s3.amazonaws.com/cat1.jpeg')
pin22.photo.attach(io: file22, filename: 'cat1.jpeg')

pin11 = Pin.create(name: 'Gross Baby')
file11 = open('https://pinthefail-seeds2.s3.amazonaws.com/gross+baby.jpeg')
pin11.photo.attach(io: file11, filename: 'gross.jpeg')

pin12 = Pin.create(name: 'Another Crossfit dude')
file12 = open('https://pinthefail-seeds2.s3.amazonaws.com/crossfit2.jpeg')
pin12.photo.attach(io: file12, filename:'crossfit2.jpeg')

pin24 = Pin.create(name: 'Cat 3')
file24 = open('https://pinthefail-seeds2.s3.amazonaws.com/cat3.jpeg')
pin24.photo.attach(io: file24, filename: 'cat3.jpeg')

pin2 = Pin.create(name: 'Chuck and Jenny')
file2 = open('https://pinthefail-seeds2.s3.amazonaws.com/chuckandjenny.jpg')
pin2.photo.attach(io: file2, filename: 'chuckandjenny.jpeg')

pin19 = Pin.create(name: 'One More Baby')
file19 = open('https://pinthefail-seeds2.s3.amazonaws.com/anotherbaby.jpeg')
pin19.photo.attach(io: file19, filename: 'anotherbaby.jpeg')

pin17 = Pin.create(name: 'Hot Girl 3')
file17 = open('https://pinthefail-seeds2.s3.amazonaws.com/hotg3.png')
pin17.photo.attach(io: file17, filename: 'hotg3.png')


pin3 = Pin.create(name: 'Vanessa and Chuck')
file3 = open('https://pinthefail-seeds2.s3.amazonaws.com/vanessaandchuck.jpg')
pin3.photo.attach(io: file3, filename: 'vanessaandchuck.jpg')

pin4 = Pin.create(name: 'Serena and Tripp')
file4 = open('https://pinthefail-seeds2.s3.amazonaws.com/serenaandtripp.jpg')
pin4.photo.attach(io: file4, filename: 'serenaandtripp.jpg')

pin13 = Pin.create(name: 'Tire Bro1')
file13 = open('https://pinthefail-seeds2.s3.amazonaws.com/tire+bo.jpg')
pin13.photo.attach(io: file13, filename: 'tire.jpg')

pin10 = Pin.create(name: 'Whiny Baby')
file10 = open('https://pinthefail-seeds2.s3.amazonaws.com/baby2.jpeg')
pin10.photo.attach(io: file10, filename: 'baby2.jpeg')

pin8 = Pin.create(name: 'Serena and Dan')
file8 = open('https://pinthefail-seeds2.s3.amazonaws.com/serenaanddan.jpg')
pin8.photo.attach(io: file8, filename: 'serenaanddan.jpg')

pin16 = Pin.create(name: 'Hot Girl 2')
file16 = open('https://pinthefail-seeds2.s3.amazonaws.com/hotg2.png')
pin16.photo.attach(io: file16, filename: 'hotg2.png')


pin6 = Pin.create(name: 'Nate and Diana')
file6 = open('https://pinthefail-seeds2.s3.amazonaws.com/nateanddiana.jpg')
pin6.photo.attach(io: file6, filename: 'nateanddiana.jpg')

pin23 = Pin.create(name: 'Cat 2')
file23 = open('https://pinthefail-seeds2.s3.amazonaws.com/cat2.jpeg')
pin23.photo.attach(io: file23, filename: 'cat2.jpeg')


pin21 = Pin.create(name: 'Three More Baby')
file21 = open('https://pinthefail-seeds2.s3.amazonaws.com/babymeltdown.jpeg')
pin21.photo.attach(io: file21, filename: 'babymeltdown.jpeg')

pin14 = Pin.create(name: 'CrossFit Bro')
file14 = open('https://pinthefail-seeds2.s3.amazonaws.com/cf3.jpeg')
pin14.photo.attach(io: file14, filename: 'cf3.jpeg')


pin25 = Pin.create(name: 'Last Cat')
file25 = open('https://pinthefail-seeds2.s3.amazonaws.com/cat5.jpeg')
pin25.photo.attach(io: file25, filename: 'cat5.jpeg')


pin7 = Pin.create(name: 'Nate and Jenny')
file7 = open('https://pinthefail-seeds2.s3.amazonaws.com/jennyandnate.jpg')
pin7.photo.attach(io: file7, filename: 'jennyandnate.jpg')

pin5 = Pin.create(name: 'Rufus and Ivy')
file5 = open('https://pinthefail-seeds2.s3.amazonaws.com/rufusandivy.jpg')
pin5.photo.attach(io: file5, filename: 'rufusandivy.jpg')

pin9 = Pin.create(name: 'Surprised Baby')
file9 = open('https://pinthefail-seeds2.s3.amazonaws.com/baby1.jpeg')
pin9.photo.attach(io: file9, filename: 'baby1.jpeg')

pin15 = Pin.create(name: 'Hot Girl Pizza')
file15 = open('https://pinthefail-seeds2.s3.amazonaws.com/hotgirlpizza2.jpeg')
pin15.photo.attach(io: file15, filename: 'hotgirlpizza2.jpeg')




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
board_pin15 = BoardPin.create(board_id: board4.id, pin_id: pin15.id)
board_pin16 = BoardPin.create(board_id: board4.id, pin_id: pin16.id)
board_pin17 = BoardPin.create(board_id: board4.id, pin_id: pin17.id)
board_pin18 = BoardPin.create(board_id: board4.id, pin_id: pin18.id)
board_pin19 = BoardPin.create(board_id: board2.id, pin_id: pin19.id)
board_pin20 = BoardPin.create(board_id: board2.id, pin_id: pin20.id)
board_pin21 = BoardPin.create(board_id: board2.id, pin_id: pin21.id)
board_pin22 = BoardPin.create(board_id: board5.id, pin_id: pin22.id)
board_pin23 = BoardPin.create(board_id: board5.id, pin_id: pin23.id)
board_pin24 = BoardPin.create(board_id: board5.id, pin_id: pin24.id)
board_pin25 = BoardPin.create(board_id: board5.id, pin_id: pin25.id)

follow1 = Follow.create(follower_id: demouser.id, followable_id: user4.id, followable_type: 'User')
follow2 = Follow.create(follower_id: demouser.id, followable_id: user3.id, followable_type: 'User')
follow3 = Follow.create(follower_id: demouser.id, followable_id: user6.id, followable_type: 'User')
follow4 = Follow.create(follower_id: demouser.id, followable_id: user2.id, followable_type: 'User')
follow5 = Follow.create(follower_id: demouser.id, followable_id: board1.id, followable_type: 'Board')
follow6 = Follow.create(follower_id: demouser.id, followable_id: board2.id, followable_type: 'Board')
follow7 = Follow.create(follower_id: user5.id, followable_id: demouser.id, followable_type: 'User')
follow8 = Follow.create(follower_id: user4.id, followable_id: demouser.id, followable_type: 'User')