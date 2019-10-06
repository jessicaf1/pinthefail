import { RECEIVE_BOARD_PIN, RECEIVE_BOARD_PINS, REMOVE_BOARD_PIN } from '../actions/board_pin_actions';

const BoardPinsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_BOARD_PINS:
            return Object.assign({}, action.board_pins)
        case RECEIVE_BOARD_PIN:
            return Object.assign({}, state, {
                [action.board_pin.id]: action.board_pin
            })
        case REMOVE_BOARD_PIN:
            let newState = Object.assign({}, state);
            delete newState[action.board_pinId];
            return newState
        default:
            return state;
    }
};

export default BoardPinsReducer;