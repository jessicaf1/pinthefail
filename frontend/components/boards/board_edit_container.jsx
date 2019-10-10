import BoardEditForm from './board_edit_forn';
import {connect} from 'react-redux';
import { updateBoard, fetchBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter, Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';

 
const mapStateToProps = (state,ownProps) => {
    debugger
    let board = state.entities.boards[ownProps.match.params.boardId]
    let currentUser = state.entities.users[state.session.id]
    return {
    currentUser, 
    board 
    }
}

const mapDispatchToProps = dispatch => {
    return {
    updateBoard: board => dispatch(updateBoard(board)),
    fetchBoard: id => dispatch(fetchBoard(id)),
    openModal: () => dispatch(openModal('updateBoard')),
    closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardEditForm))