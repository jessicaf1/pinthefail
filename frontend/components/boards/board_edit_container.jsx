import BoardEditForm from './board_edit_forn';
import {connect} from 'react-redux';
import { updateBoard, fetchBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions'
 
const mapStateToProps = (state,ownProps) => {
    let board = state.entities.boards[ownProps.match.params.boardId]
    let currentUser = state.entities.users[board.user_id]
    return {
    currentUser, 
    board 
    }
}

const mapDispatchToProps = dispatch => {
    return {
    updateBoard: board => dispatch(updateBoard(board)),
    fetchBoard: id => dispatch(fetchBoard(id)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardEditForm)