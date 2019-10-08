import * as APIUtil from '../util/board_api_util';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const REMOVE_BOARD = 'REMOVE_BOARD';

const receiveBoard = board => {
    debugger
    return {
        type: RECEIVE_BOARD,
        board
    }
}

const receiveBoards = boards => {
    debugger
    return {
        type: RECEIVE_BOARDS,
        boards
    }
}

const removeBoard = boardId => {
    return {
        type: REMOVE_BOARD,
        boardId
    }
}

export const fetchBoards = () => {
    return dispatch => {
        return APIUtil.fetchBoards().then(boards => {
            debugger
            return dispatch(receiveBoards(boards));
        },
        res => console.log(res))
    }
}

export const fetchBoard = (id) => {
    return dispatch => {
        return APIUtil.fetchBoard(id).then(board => dispatch(receiveBoard(board)))
    }
}

export const createBoard = (board) => {
    return dispatch => {
        return APIUtil.createBoard(board).then(board => dispatch(receiveBoard(board)))
    }
}

export const updateBoard = (board) => {
    debugger
    return dispatch => {
        return APIUtil.updateBoard(board).then(board => dispatch(receiveBoard(board)))
    }
}


export const deleteBoard = (id) => {
    debugger
    return dispatch => {
        return APIUtil.deleteBoard(id).then(board => dispatch(removeBoard(board)))
    }
}