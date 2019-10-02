import React from 'react';
import { Link } from 'react-router-dom';

export default({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h2>hello, {currentUser.username}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
        </div>
    );

    return (
        <div>
            <header className="nav-bar">
            {display}
            </header>
        </div>
    )
}