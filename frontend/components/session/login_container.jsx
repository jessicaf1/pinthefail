
import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import SessionForm from './sessionform';

export const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Log In',
        loggedin: Boolean(state.session.id)
    }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)