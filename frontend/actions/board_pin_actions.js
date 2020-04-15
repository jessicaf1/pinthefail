import * as APIUtil from '../util/board_pin_api_util';
export const RECEIVE_BOARD_PIN = 'RECEIVE_BOARD_PIN';
export const RECEIVE_BOARD_PINS = 'RECEIVE_BOARD_PINS';
export const REMOVE_BOARD_PIN = 'REMOVE_BOARD_PIN';
import { receivePin } from './pin_actions';
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveBoardPin = board_pin => {
    return {
        type: RECEIVE_BOARD_PIN,
        board_pin
    }
}

const receiveBoardPins = board_pins => {
    return {
        type: RECEIVE_BOARD_PINS,
        board_pins
    }
}

const removeBoardPin = board_pinId => {
    return {
        type: REMOVE_BOARD_PIN,
        board_pinId
    }
}

const receiveErrors = errors => {
    debugger;
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};

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
    debugger
    return dispatch => {
        return APIUtil.createBoardPin(board_pin).then(board_pin =>
            dispatch(receiveBoardPin(board_pin)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        );
    }
}

export const updateBoardPin = (board_pin) => {
    debugger
    return dispatch => {
        return APIUtil.updateBoardPin(board_pin).then(board_pin => dispatch(receiveBoardPin(board_pin)))
    }
}


export const deleteBoardPin = (id) => {

    return dispatch => {
        return APIUtil.deleteBoardPin(id).then(board_pin => dispatch(removeBoardPin(board_pin)))
    }
}