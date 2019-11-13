# README

### Introduction
Pinthefail, inspired by Pinterest, allows users to create boards and pins dedicated 
to things they dislike. It is a faithful clone that simulates the Pinterest user experience while offering its own twist.

### Live Link
https://pinthefail.herokuapp.com/#/

### Splash Page:
![Picture](https://user-images.githubusercontent.com/44717186/66662801-7bfb9900-ec17-11e9-8fe8-e048d3481ef4.png)

### User's Show Page:
![Picture](https://user-images.githubusercontent.com/44717186/68601137-c0c25c00-0471-11ea-835f-79eb98621da3.png)

### Features
* Modals for sign-up and log-in that feature secure authentication.
* A masonry style grid splash page.
* Ability for the user to upload images and create boards, edit profiles and pins, and attach pins to boards.  
* Polymorphic associations that allow users to follow other users and boards.  

### Technologies
* React/Redux
* Javascript
* Ruby on Rails
* Photo storage with AWS
* CSS

### Code Challenges + Solutions  
* In order to be able to update a pin's boards, I needed to adjust the props being sent in to the modal.  

```
case 'savePinToBoard':
      debugger
      component = <PinToBoardContainer pinId={modal.props}/>; 
      break; 
    case 'editPin':
      component = <PinEditFormContainer pinId={modal.props}/>;
      break;
```
* To allow users to follow both other users and boards, and conserve space while improving scalability, I used polymorphic associations on the back end. 
```
has_many :follows, as: :followable
  
has_many :followings,
  foreign_key: :follower_id,
  class_name: :'Follow'

has_many :followers,
  through: :follows,
  source: :follower

has_many :followed_users, 
  through: :followings,
  source: :followable,
  source_type: :'User'

has_many :followed_boards,
  through: :followings,
  source: :followable,
  source_type: :'Board'
```
     

