import { RECEIVE_BOARD, RECEIVE_BOARDS, REMOVE_BOARD } from '../actions/board_actions';

const BoardsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_BOARDS:
            return Object.assign({}, action.boards)
        case RECEIVE_BOARD:
            return Object.assign({}, state, {
                [action.board.id]: action.board
            })
        case REMOVE_BOARD:
            let newState = Object.assign({}, state);
            delete newState[action.boardId];
            return newState
        default:
            return state;
    }
};

export default BoardsReducer;