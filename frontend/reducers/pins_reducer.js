import { RECEIVE_PINS, RECEIVE_PIN, REMOVE_PIN } from '../actions/pin_actions';
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const PinsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PINS:
            debugger
            return Object.assign({}, action.pins)
        case RECEIVE_PIN:
            debugger
            return Object.assign({}, state, action.payload.pins)
        case REMOVE_PIN:
            let newState = Object.assign({}, state);
            delete newState[action.pinId];
            return newState;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.payload.pins)
        default:
            return state;
    }
};

export default PinsReducer;