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
* One challenge I faced was in the hovering of the pencil and thumb images on each pin, which give the user the ability to edit pins and pin them to boards, respectively. I needed to stop propagation so that these buttons did not redirect to the pin show page; additonally, I needed to ensure that these buttons did not hover on more than one image at once despite the absolute positioning of these buttons on the page.  To that end, I used conditionals to check the state, JS event handlers to handle the hover, and the pin Id as a prop to verify uniqueness.
```
     MouseImageHoverOut() {
         this.setState({isHoveringOnThumb: false});
         this.setState(state => state.isHovering === true?
            {isHovering: true}
            :
            {isHovering: false}
            )
     }

     MouseImageHover(){
        this.setState((state) => {return {isHovering: true}})
        this.setState((state) => {return {isHoveringOnThumb: true}})
     }

```
```
           <img onMouseEnter={this.MouseHoverIn}
                  onMouseOut={this.MouseHoverOut}     
                 onClick={() => {
                
                this.props.history.push(`/users/${this.props.currentUser.id}/pins/${this.props.pin.id}`)
                } 
            }
                     className="grid-item" src={this.props.pin.photoUrl} alt="" />  
          
             { (this.state.isHovering && this.props.pin.id === this.props.hoveredPinId) ? <img img id="grid-item-image"  src={window.logo}  onMouseEnter={this.MouseImageHover} 
                                                                                        onMouseOut={this.MouseImageHoverOut} 
                                                                                        onClick={this.stopModal}/> : null } 
                
                { (this.state.isHovering && this.props.pin.id === this.props.hoveredPinId) ? <img img id="grid-item-image2"  src={window.pencil}  onMouseEnter={this.MouseImageHover} 
                                                                                        onMouseOut={this.MouseImageHoverOut} 
                                                                                        onClick={this.stopModal2}/> : null } 
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
     

