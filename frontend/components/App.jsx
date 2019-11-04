import React from 'react';
import NavBarContainer from './navbar/nav_bar_container';
//import SignupContainer from './session/signup_container';
//import LoginContainer from './session/login_container';
import { Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from '../components/modal';
//import DropDownContainer from './navbar/drop_down_container'
import Background from './background'
import UserShowContainer from './users/user_showpage_container'
import EditFormContainer from './users/user_edit_form_container'
import BoardIndexContainer from './boards/board_index_container'
import PinsIndexContainer from './pins/pin_index_container'
import BoardShowContainer from './boards/board_show_container'
import BoardCreateFormContainer from './boards/board_create_form_container'
import PinsCreateFormContainer from './pins/pin_create_form_container'
import PinShowContainer from './pins/pin_show_container'

const App = () => (
 <div>
     <Modal/> 
     <header>
        <NavBarContainer/>
    </header>
    <Switch>
       <AuthRoute exact path="/" component={Background}/> 
        
        <ProtectedRoute path="/users/:userId/boards/:boardId" component={BoardShowContainer}/>
        <ProtectedRoute path="/users/pinBuilder" component={PinsCreateFormContainer} /> 
        <ProtectedRoute path="/users/:userId/boards/new" component={BoardCreateFormContainer}/>
        <ProtectedRoute path="/users/:userId/boards" component={BoardIndexContainer}/>
            <ProtectedRoute path="/users/:userId/pins/:pinId" component={PinShowContainer} />
            <ProtectedRoute path="/users/:userId/pins" component={PinsIndexContainer} />
            <ProtectedRoute path="/users/:userId/edit" component={EditFormContainer} />
        <ProtectedRoute path="/users/:userId" component={BoardIndexContainer} />
            
       
    </Switch>
</div>
);

export default App;
    
