import * as APIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW'

const receiveFollow = follow => {
    // debugger
    return {
        type: RECEIVE_FOLLOW,
        follow
    }
}

const removeFollow = followId => {
    return {
        type: REMOVE_FOLLOW,
        followId
    }
}

export const createFollow = (follow) => {
    return dispatch => {
        return APIUtil.createFollow(follow).then(follow => dispatch(receiveFollow(follow)))
    }
}

export const deleteFollow = (id) => {
    // debugger
    return dispatch => {
        return APIUtil.deleteFollow(id).then(followId => dispatch(deleteFollow(followId)))
    }
}