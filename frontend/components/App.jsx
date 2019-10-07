import React from 'react';
import NavBarContainer from './navbar/nav_bar_container';
//import SignupContainer from './session/signup_container';
//import LoginContainer from './session/login_container';
import { Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';
//import { AuthRoute, ProtectedRoute } from '../util/route_util';
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

const App = () => (
 <div>
     <Modal/> 
     <header>
        <NavBarContainer/>
    </header>
    <Switch>
       <Route exact path="/" component={Background}/> 
        <Route path="/users/pinBuilder" component={PinsCreateFormContainer} /> 
        <Route path="/users/:userId/edit" component={EditFormContainer} />
        <Route path="/users/:userId/boards/new" component={BoardCreateFormContainer}/>
        <Route path="/users/:userId/boards" component={BoardIndexContainer}/>
            <Route path="/users/:userId/pins" component={PinsIndexContainer} />
        <Route path="/users/:userId/:boardId" component={BoardShowContainer}/>
       
        <Route path="/users/:userId" component={UserShowContainer} />
    </Switch>
</div>
);

export default App;
    
