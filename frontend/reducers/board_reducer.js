import { RECEIVE_BOARD, RECEIVE_BOARDS, REMOVE_BOARD } from '../actions/board_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const BoardsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_BOARDS:
            debugger
            return Object.assign({}, action.boards)
        case RECEIVE_BOARD:
            debugger
            return Object.assign({}, state, {
                [action.board.id]: action.board
            })
        case REMOVE_BOARD:
            let newState = Object.assign({}, state);
            delete newState[action.boardId];
            return newState;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.payload.boards);
        default:
            return state;
    }
};

export default BoardsReducer;