
import React from 'react';
import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';
import SessionForm from './sessionform';
import { openModal, closeModal } from '../../actions/modal_actions'

export const mapStateToProps = (state) => {
    debugger
    return {
        errors: state.errors.session,
        formType: 'signup',
        loggedin: Boolean(state.session.currentUser)
    }
}

export const mapDispatchToProps = (dispatch) => {
    
    return {
        
        processForm: (user) => dispatch(signup(user)),
        otherForm: ()=> dispatch(openModal('login')),
        closeModal: () => {
            debugger
            return dispatch(closeModal())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)