import { RECEIVE_BOARD, RECEIVE_BOARDS, REMOVE_BOARD } from '../actions/board_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PIN } from '../actions/pin_actions';


const BoardsReducer = (state = {}, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_BOARDS:
        case RECEIVE_PIN:
            debugger
            return Object.assign({}, newState, action.payload.boards)
        case RECEIVE_BOARD:
            debugger
            return Object.assign({}, newState, {
                [action.board.id]: action.board
            })
        case REMOVE_BOARD:
            delete newState[action.boardId];
            return newState;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.payload.boards);
        default:
            return state;
    }
};

export default BoardsReducer;