
import React from 'react';
import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';
import SessionForm from './sessionform';

export const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up',
        loggedin: Boolean(state.session.id)
    }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)