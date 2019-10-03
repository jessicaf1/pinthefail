import React from 'react';
import { Link } from 'react-router-dom';
import DropDownContainer from './drop_down_container';

export default ({ currentUser, logout, openModal }) => {
    // this.switchClicked = this.switchClicked.bind(this)
    // this.dropdownBar = this.dropdownBar.bind(this)
    // this.state = { clicked: false }


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
    // dropdownBar() {
    //   if(this.state.clicked === true){
    //     return (
    //       <ul>
    //         <li><button className="visible" onClick={this.props.logout}>Log Out</button></li>
    //       </ul>
    //     )
    //   }
    //   else{
    //     return (null) 
    //   }
    // }

    // switchClicked() {
    //     this.state.clicked = !this.state.clicked,
    //     this.dropdownBar()
    // }

    const signInSignUp = () => {
      return (
        <div>
            <button className="modalbutton" onClick={() => openModal('login')}>Login</button>
            <button className="modalbutton" onClick={() => openModal('signup')}>Signup</button>
        </div>
      ) 
      
    }

  const navbar = (currentUser, logout) => {
    return(
      <div>
        <form className="nav-bar">
          <img className="image" id="spacethumb" src={window.logo}/>
          <input className="btn spacebar" type="text" placeholder="search..."/>
          <button className="btn" type="submit">Home</button>
          <button className="btn" type="submit">{currentUser.email}</button>
          <button className="btn" type="submit">Following</button>
         
         <DropDownContainer/> 
        </form>
      </div>
    ) 
    };

     debugger
    return ( currentUser ?
      navbar(currentUser, logout) :
      signInSignUp()
      );
} 