import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  CLEAR_SESSION_ERRORS
} from '../actions/session_actions'

const _nullSession = {
  currentUser: null
}

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      return Object.assign({}, { currentUser: action.payload.user.id });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    // case CLEAR_SESSION_ERRORS:
    //   return [];
    default:
      return state;
  }
}