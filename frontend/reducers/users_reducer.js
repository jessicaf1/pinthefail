import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions'
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions'
//i put in receives here but how is that diff from receive current user 
const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {

        case RECEIVE_CURRENT_USER:
            debugger
            return Object.assign({}, state, {
                [action.payload.user.id]: action.payload.user
            }, action.payload.followers, action.payload.followed_users);
        case RECEIVE_USER:
            debugger
            return Object.assign({}, state, {
                [action.user.id]: action.user
            }, action.user.followers);
        case RECEIVE_USERS:
            return action.users;
        case REMOVE_FOLLOW:
            newState = Object.assign({}, state);
            delete newState[action.follow];
            return newState
        case RECEIVE_FOLLOW:
            return Object.assign({}, state, {
                [action.follow.id]: action.follow
            });
        default:
            return state;
    }
}

export default usersReducer;