import * as APIUtil from '../util/board_pin_api_util';
export const RECEIVE_BOARD_PIN = 'RECEIVE_BOARD_PIN';
export const RECEIVE_BOARD_PINS = 'RECEIVE_BOARD_PINS';
export const REMOVE_BOARD_PIN = 'REMOVE_BOARD_PIN';

const receiveBoardPin = board_pin => {
    return {
        type: RECEIVE_BOARD,
        board_pin
    }
}

const receiveBoardPins = board_pins => {
    return {
        type: RECEIVE_BOARDS,
        board_pins
    }
}

const removeBoardPin = board_pinId => {
    return {
        type: REMOVE_BOARD,
        board_pinId
    }
}

export const fetchBoardPins = () => {
    return dispatch => {
        return APIUtil.fetchBoardPins().then(board_pins => dispatch(receiveBoardPins(board_pins)))
    }
}

export const fetchBoardPin = (id) => {
    return dispatch => {
        return APIUtil.fetchBoardPin(id).then(board_pin => dispatch(receiveBoardPin(board_pin)))
    }
}

export const createBoardPin = (board_pin) => {
    return dispatch => {
        return APIUtil.createBoardPin(board_pin).then(board_pin => dispatch(receiveBoard(board_pin)))
    }
}

export const updateBoardPin = (board_pin) => {

    return dispatch => {
        return APIUtil.updateBoardPin(board_pin).then(board_pin => dispatch(receiveBoard(board_pin)))
    }
}


export const deleteBoardPin = (id) => {

    return dispatch => {
        return APIUtil.deleteBoardPin(id).then(board_pin => dispatch(removeBoardPin(board_pin)))
    }
}