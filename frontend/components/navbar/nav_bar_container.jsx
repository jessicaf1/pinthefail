import React from 'react';
import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions'; 
import NavBar from './nav_bar';
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = state => {
    debugger
    return {
        currentUser: state.entities.users[state.session.currentUser]
        
    }
}

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        logout: () => dispatch(logout()),
        openModal: modal =>  {
            // debugger
            return dispatch(openModal(modal));  
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)