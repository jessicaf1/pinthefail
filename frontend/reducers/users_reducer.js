import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions'
//i put in receives here but how is that diff from receive current user 
const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            return Object.assign({}, state, {
                [action.payload.user.id]: action.payload.user
            });
        case RECEIVE_USER:
            return Object.assign({}, state, {
                [action.user.id]: action.user
            });
        case RECEIVE_USERS:
            return action.users;
        default:
            return state;
    }
}

export default usersReducer;