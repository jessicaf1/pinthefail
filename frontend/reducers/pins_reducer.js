import { RECEIVE_PINS, RECEIVE_PIN, REMOVE_PIN } from '../actions/pin_actions';
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_BOARD_PIN } from '../actions/board_pin_actions'

const PinsReducer = (state = {}, action) => {
    let newState;
    let pin;
    switch (action.type) {
        case RECEIVE_PINS:
            debugger
            return Object.assign({}, action.pins)
        case RECEIVE_BOARD_PIN:
            debugger
            newState = Object.assign({}, state);
            pin = newState[action.board_pin.pin_id]
            pin.board_ids.push(action.board_pin.board_id)
            return Object.assign({}, state, {
                [pin.id]: pin
            })
        case RECEIVE_PIN:
            debugger
            return Object.assign({}, state, action.payload.pins)
        case REMOVE_PIN:
            debugger
            newState = Object.assign({}, state);
            delete newState[action.pinId];
            return newState;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.payload.pins)
        default:
            return state;
    }
};

export default PinsReducer;