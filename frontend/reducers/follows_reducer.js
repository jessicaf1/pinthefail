import { RECEIVE_FOLLOW, REMOVE_FOLLOW, RECEIVE_FOLLOWS } from '../actions/follow_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { merge } from 'lodash';

const FollowsReducer = (state = {}, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_FOLLOWS:
            // debugger
            return Object.assign({}, action.follows)
        case RECEIVE_FOLLOW:
            // debugger
            return merge({}, newState, {
                [action.follow.id]: action.follow
            })
        case REMOVE_FOLLOW:
            // debugger
            // newState = Object.assign({}, state);
            delete newState[action.follow];
            return newState;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.follows)
        default:
            return state;
    }
};

export default FollowsReducer;