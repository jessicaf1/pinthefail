import { RECEIVE_FOLLOW, REMOVE_FOLLOW, RECEIVE_FOLLOWS } from '../actions/follow_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const FollowsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case RECEIVE_FOLLOWS:
            debugger
            return Object.assign({}, action.follows)
        case RECEIVE_FOLLOW:
            // debugger
            return Object.assign({}, newState, {
                [action.follow.id]: action.follow
            })
        case REMOVE_FOLLOW:
            // debugger
            newState = Object.assign({}, state);
            delete newState[action.followId];
            return newState;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.follows)
        default:
            return state;
    }
};

export default FollowsReducer;