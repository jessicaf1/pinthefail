import * as APIUtil from '../util/pin_api_util';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const RECEIVE_PINS = 'RECEIVE_PINS';
export const REMOVE_PIN = 'REMOVE_PIN';

const receivePin = pin => {
    return {
        type: RECEIVE_PINS,
        pin
    }
}

const receivePins = pins => {
    return {
        type: RECEIVE_PINS,
        pins
    }
}

const removePin = pinId => {
    return {
        type: REMOVE_PIN,
        pinId
    }
}

export const fetchPins = () => {
    return dispatch => {
        return APIUtil.fetchPins().then(pins => dispatch(receivePins(pins)))
    }
}

export const fetchPin = (id) => {
    return dispatch => {
        return APIUtil.fetchPin(id).then(pin => dispatch(receivePin(pin)))
    }
}

export const createPin = (pin) => {
    return dispatch => {
        return APIUtil.createPin(board).then(pin => dispatch(receivePin(pin)))
    }
}

export const updatePin = (pin) => {
    debugger
    return dispatch => {
        return APIUtil.updatePin(pin).then(pin => dispatch(receiveBoard(pin)))
    }
}

export const deletePin = (id) => {
    debugger
    return dispatch => {
        return APIUtil.deletePin(id).then(board => dispatch(removePin(board)))
    }
}