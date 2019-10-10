// import {fetchBoards} '../../actions/board_actions';
// import {openModal, closeModal} from '../../actions/modal_actions'
import { connect } from 'react-redux';
import BoardShow from './board_show';
import {fetchBoard} from '../../actions/board_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    // debugger
return {
    board: state.entities.boards[ownProps.match.params.boardId] 
}

}

const mapDispatchToProps = dispatch => {
    // debugger
return {
    fetchBoard: id => dispatch(fetchBoard(id))
}
    
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow))