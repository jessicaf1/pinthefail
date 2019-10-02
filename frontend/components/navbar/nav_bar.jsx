import React from 'react';
import { Link } from 'react-router-dom';

export default({ currentUser, logout, openModal }) => {
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
    

    const signInSignUp = () => (
        <div>
            <button className="modalbutton" onClick={() => openModal('login')}>Login</button>
        <button className="modalbutton" onClick={() => openModal('signup')}>Signup</button>
        </div>
    );
    const navbar = () => (
      <div>
        <form className="nav-bar">
          <img className="image" src={window.logo}/>
          <input className="btn spacebar" type="text" placeholder="search..."/>
          <button className="btn" type="submit">Home</button>
          <button className="btn" type="submit">{currentUser.username}</button>
          <button className="btn" type="submit">Following</button>
         <ul class="dropdown">
           <span class="dropdown-button">...</span>
            <li><button className="btn dropdown-little-button" onClick={logout}>Log Out</button></li>
         </ul>
        </form>
      </div>
    );
  
    return (
      currentUser ?
      navbar(currentUser, logout) :
      signInSignUp()
    );
  };
  