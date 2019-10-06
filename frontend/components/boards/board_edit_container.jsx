import BoardEditForm from './board_edit_forn';
import {connect} from 'react-redux';
import { updateBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions'
 
const mapStateToProps = (state,ownProps) => {
    let board = state.entities.boards[ownProps.match.params.boardId]
    return {
    //currentUser: state.users[state.session.currentUser] - can i pass this in to state
    board 
    }
}

const mapDispatchToProps = dispatch => {
    return {
    createBoard: board => dispatch(updateBoard(board)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardEditForm)