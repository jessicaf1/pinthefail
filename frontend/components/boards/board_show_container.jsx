// import {fetchBoards} '../../actions/board_actions';
// import {openModal, closeModal} from '../../actions/modal_actions'
import { connect } from 'react-redux';
import BoardShow from './board_show';
import {fetchBoard, updateBoard} from '../../actions/board_actions';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions' 


const mapStateToProps = (state, ownProps) => {
    // debugger
return {
    board: state.entities.boards[ownProps.match.params.boardId],
    
}

}

const mapDispatchToProps = dispatch => {
    // debugger
return {
    fetchBoard: id => dispatch(fetchBoard(id))
}
    
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow))