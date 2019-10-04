import * as APIUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}

const receiveUsers = users => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const fetchUsers = () => {
    return dispatch => {
        return APIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
    }
}

export const fetchUser = () => {
    return dispatch => {
        return APIUtil.fetchUser().then(user => dispatch(receiveUser(user)))
    }
}

export const createUser = (user) => {
    return dispatch => {
        return APIUtil.createUser().then(user => dispatch(receiveUser(user)))
    }
}

export const updateUser = (user) => {
    return dispatch => {
        return APIUtil.updateUser().then(user => dispatch(receiveUser(user)))
    }
}