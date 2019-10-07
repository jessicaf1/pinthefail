import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_SESSION_ERRORS
} from '../actions/session_actions';

import { CLOSE_MODAL } from '../actions/modal_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            debugger
            return action.errors;
        case RECEIVE_CURRENT_USER:
            debugger
            return [];
        case CLEAR_SESSION_ERRORS:
            debugger
            return [];
        case CLOSE_MODAL:
            debugger
            return [];
        default:
            return state;
    }
}