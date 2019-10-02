import React from 'react';
import NavBarContainer from './navbar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route } from 'react-router-dom';

const App = () => (
 <div>
     <header>
        <h1>pinthefail</h1>
        <NavBarContainer/>
    </header>

    <Route path="/login" component={LoginContainer}></Route>
    <Route path="/signup" component={SignupContainer}></Route>
</div>
);

export default App;
    