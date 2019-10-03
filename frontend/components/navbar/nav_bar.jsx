import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.switchClicked = this.switchClicked.bind(this)
    this.dropdownBar = this.dropdownBar.bind(this)
    this.state = { clicked: false }
  }

//     const display = currentUser ? (
//         <div>
//             <h2>hello, {currentUser.username}</h2>
//             <button onClick={logout}>Logout</button>

//         </div>
//     ) : (
//         <div>
//             <Link to="/signup">Sign Up</Link>
//             <Link to="/login">Log In</Link>
//         </div>
//     );

//     return (
//         <div>
//             <header className="nav-bar">
//             {display}
//             </header>
//         </div>
//     )
// }
    dropdownBar() {
      if(this.state.clicked === true){
        return (
          <ul>
            <li><button className="visible" onClick={this.props.logout}>Log Out</button></li>
          </ul>
        )
      }
    }

    switchClicked() {
      return (
        this.state.clicked = !this.state.clicked,
        this.dropdownBar()
      ) 
    }

    signInSignUp() {
        <div>
            <button className="modalbutton" onClick={() => openModal('login')}>Login</button>
            <button className="modalbutton" onClick={() => openModal('signup')}>Signup</button>
        </div>
    }

    navbar(){
      <div>
        <form className="nav-bar">
          <img className="image" id="spacethumb" src={window.logo}/>
          <input className="btn spacebar" type="text" placeholder="search..."/>
          <button className="btn" type="submit">Home</button>
          <button className="btn" type="submit">{this.props.currentUser.username}</button>
          <button className="btn" type="submit">Following</button>
          <button><img className="image" src={window.dots} onClick={this.switchClicked()} /></button>
         <ul>
            
         </ul>
        </form>
      </div>
    };

    render() {
    return (
      this.props.currentUser ?
      this.navbar(this.props.currentUser, this.props.logout) :
      this.signInSignUp()
    );
  };
}

export default NavBar