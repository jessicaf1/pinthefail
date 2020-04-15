import * as APIUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
import { receiveCurrentUser } from './session_actions'

export const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}

const receiveUsers = payload => {
    return {
        type: RECEIVE_USERS,
        users: payload.users
    }
}

export const fetchUsers = () => {
    return dispatch => {
        return APIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
    }
}

export const fetchUser = (id) => {
    return dispatch => {
        return APIUtil.fetchUser(id).then(user => dispatch(receiveCurrentUser(user)))
    }
}

// export const createUser = (user) => {
//     return dispatch => {
//         return APIUtil.createUser().then(user => dispatch(receiveUser(user)))
//     }
// }

export const updateUser = (user) => {
    // debugger
    return dispatch => {
        return APIUtil.updateUser(user).then(user => dispatch(receiveCurrentUser(user)))
    }
}