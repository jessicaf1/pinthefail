import * as APIUtil from '../util/pin_api_util';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const RECEIVE_PINS = 'RECEIVE_PINS';
export const REMOVE_PIN = 'REMOVE_PIN';

export const receivePin = pin => {
    debugger
    return {
        type: RECEIVE_PIN,
        pin
    }
}

const receivePins = pins => {
    debugger
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
    debugger
    return dispatch => {
        return APIUtil.createPin(pin).then(pin => dispatch(receivePin(pin)))
    }
}

export const updatePin = (pin) => {
    debugger
    return dispatch => {
        return APIUtil.updatePin(pin).then(pin => dispatch(receivePin(pin)))
    }
}

export const deletePin = (id) => {
    debugger
    return dispatch => {
        return APIUtil.deletePin(id).then(pin => dispatch(removePin(pin)))
    }
}