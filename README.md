# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


### Introduction
Pinthefail is a Pinterest clone that allows users to create boards and pins dedicated 
to things they dislike. It is a faithful clone that simulates the Pinterest experience
while being the anti-Pinterest Pinterest.

### Live Link
https://pinthefail.herokuapp.com/#/

### Splash Page:
![Picture](https://user-images.githubusercontent.com/44717186/66662801-7bfb9900-ec17-11e9-8fe8-e048d3481ef4.png)

### User's Show Page:
![Picture](https://user-images.githubusercontent.com/44717186/66663966-b2d2ae80-ec19-11e9-932a-4a2b1349f6d5.png)

### Features
* Modals for sign-up and log-in that feature secure authentication.
* A masonry style grid splash page.
* Users can edit their profiles.
* Users can upload images and create boards.  

### Technologies
* React/Redux
* Javascript
* Ruby on Rails
* Photo storage with AWS
* CSS


### Future Implementation
* Users can pin images to boards.
* Users can follow other users as well as boards.  
* Users can edit pins and boards. 

### Code Challenges + Solutions  
* One challenge I faced was creating modals across the app's various pages, including
sign-in/sign-up and creating a new board. For the new board, I used an event listener to create a dropdown menu, which featured an onClick event to open the create form modal. 

 ````this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}>
                <div className="containerdd">
                <div className="pinsbuilder" onClick={this.props.openModal}>Create Board</div>
                <Link className="pinsbuilder" to="/users/pinBuilder">Create Pin</Link>
                </div>
                </div>
            )
            :
            (null)


