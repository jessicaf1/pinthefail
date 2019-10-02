import React from 'react';
import NavBarContainer from './navbar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route, Redirect, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from '../components/modal'

const App = () => (
 <div>
     <Modal/> 
     <header>
        <h1>pinthefail</h1>
        <NavBarContainer/>
    </header>

    <AuthRoute path="/login" component={LoginContainer}/>
    <AuthRoute path="/signup" component={SignupContainer}/>
</div>
);

export default App;
    