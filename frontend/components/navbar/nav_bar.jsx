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
            <button onClick={() => openModal('Log In')}>Login</button>
            <button onClick={() => openModal('Sign Up')}>Signup</button>
        </div>
    );
    const navbar = () => (
      <div>
        <h2 className="header-name">welcome, {currentUser.username}</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    );
  
    return (
      currentUser ?
      navbar(currentUser, logout) :
      signInSignUp()
    );
  };
  