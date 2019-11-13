import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions'
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions'
//i put in receives here but how is that diff from receive current user 
const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState2;
    let array;
    let array2;
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
            debugger

            let follower = newState[action.follow.follower_id]
            let followable = newState[action.follow.followable_id]

            let i = follower.followed_user_ids.indexOf(followable.id)
            let j = followable.follower_ids.indexOf(follower.id)

            follower.followed_user_ids.splice(i, 1)
            followable.follower_ids.splice(j, 1)

            //let array = state[action.follow.follawble_id].followers
            //for(let i = 0; i < array.length; i ++){
            // if(array[i] === action.follow.follower){
            //array.splice(i, 1)
            //}
            //}



            // array = [];
            // state[action.follow.follower_id].followed_user_ids.forEach((id) => {
            //     if (id !== action.follow.followable_id) {
            //         array.push(id)
            //     }
            // })
            // newState[action.follow.follower_id].followed_user_ids = array
            debugger


            // state[action.follow.followable_id].follower_ids.pop()


            return newState
        case RECEIVE_FOLLOW:
            debugger
            newState2 = Object.assign({}, state);
            array = [];
            array2 = [];
            state[action.follow.follower_id].followed_user_ids.forEach((id) => {
                array.push(id)
            })
            array.push(action.follow.followable_id)
            newState2[action.follow.follower_id].followed_user_ids = array
            debugger

            state[action.follow.followable_id].follower_ids.forEach((id) => {
                // if (!array2.includes(id)) {
                array2.push(id)
                    // }
            })
            array2.push(action.follow.follower_id)
            newState2[action.follow.followable_id].follower_ids = array2



            return newState2;
        default:
            return state;
    }
}

export default usersReducer;