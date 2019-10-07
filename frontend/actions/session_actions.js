import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = payload => {
    debugger
    return {
        type: RECEIVE_CURRENT_USER,
        payload
    }
}

const logoutCurrentUser = () => {
    debugger
    return {
        type: LOGOUT_CURRENT_USER
    };
};

const receiveErrors = errors => {
    debugger
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};

export const clearSessionErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS,
    }
}


export const signup = user => {
    return dispatch => {
        return APIUtil.signup(user).then(
            user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        );
    }
}

export const login = user => {
    return dispatch => {
        return APIUtil.login(user).then(
            user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        );
    }
}

export const logout = () => {
    return dispatch => {
        return APIUtil.logout().then(user => dispatch(logoutCurrentUser()));
    };
};

//err => (dispatch(receiveErrors(err.responseJSON)))