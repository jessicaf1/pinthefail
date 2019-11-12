import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions'
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions'
//i put in receives here but how is that diff from receive current user 
const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState2;
    let array;
    switch (action.type) {

        case RECEIVE_CURRENT_USER:
            debugger
            return Object.assign({}, state, {
                [action.payload.user.id]: action.payload.user
            }, action.payload.followers, action.payload.followed_boards, action.payload.followed_users);
        case RECEIVE_USER:
            debugger
            return Object.assign({}, state, {
                [action.user.id]: action.user
            }, action.user.followers);
        case RECEIVE_USERS:
            debugger
            return action.users;
        case REMOVE_FOLLOW:
            let newState = Object.assign({}, state);

            array = [];
            state[action.follow.follower_id].followed_user_ids.forEach((id) => {
                if (id !== action.follow.followable_id) {
                    array.push(id)
                }
            })
            newState[action.follow.follower_id].followed_user_ids = array
            debugger
            return newState
        case RECEIVE_FOLLOW:
            debugger
            newState2 = Object.assign({}, state);
            array = [];
            state[action.follow.follower_id].followed_user_ids.forEach((id) => {
                array.push(id)
            })
            array.push(action.follow.followable_id)
            newState2[action.follow.follower_id].followed_user_ids = array
            debugger
            return newState2;
        default:
            return state;
    }
}

export default usersReducer;