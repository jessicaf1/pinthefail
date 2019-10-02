
import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import SessionForm from './sessionform';
import { openModal, closeModal } from '../../actions/modal_actions'

export const mapStateToProps = (state) => {
    debugger
    return {
        
        errors: state.errors.session,
        formType: 'login',
        loggedin: Boolean(state.session.id)
    }
}

export const mapDispatchToProps = (dispatch) => {
    debugger
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={()=> dispatch(openModal('signup'))}>Sign Up</button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)