import * as APIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS'

const receiveFollow = follow => {
    // debugger
    return {
        type: RECEIVE_FOLLOW,
        follow
    }
}

const removeFollow = follow => {
    return {
        type: REMOVE_FOLLOW,
        follow
    }
}

const receiveFollows = follows => {
    // debugger
    return {
        type: RECEIVE_FOLLOWS,
        follows
    }
}

export const fetchFollows = () => {
    return dispatch => {
        return APIUtil.fetchFollows().then(follows => dispatch(receiveFollows(follows)))
    }
}

export const createFollow = (follow) => {
    debugger
    return dispatch => {
        return APIUtil.createFollow(follow).then(follow => dispatch(receiveFollow(follow)))
    }
}

export const deleteFollow = (follow) => {
    debugger
    return dispatch => {
        return APIUtil.deleteFollow(follow).then(follow => dispatch(removeFollow(follow)))
    }
}