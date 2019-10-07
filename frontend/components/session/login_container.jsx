
import React from 'react';
import {connect} from 'react-redux';
import {login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './sessionform';
import { openModal, closeModal } from '../../actions/modal_actions'

export const mapStateToProps = (state) => {
    debugger
    return {
        errors: state.errors.session,
        formType: 'login',
        loggedin: Boolean(state.session.currentUser), 
        demouser: { email: 'bwaldorf@aol.com', f_name: 'Blair', l_name: 'Waldorf', password: 'nancy5', description: 'xoxo gossip girl', location: 'nyc' } 
    }
}

export const mapDispatchToProps = (dispatch) => {
    debugger
    return {
        clearSessionErrors: () => dispatch(clearSessionErrors()),
        processForm: (user) => dispatch(login(user)),
        otherForm: ()=> dispatch(openModal('signup')),
        closeModal: () => {
            debugger
            return dispatch(closeModal())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)