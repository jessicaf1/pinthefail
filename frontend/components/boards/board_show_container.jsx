// import {fetchBoards} '../../actions/board_actions';
// import {openModal, closeModal} from '../../actions/modal_actions'
import { connect } from 'react-redux';
import BoardShow from './board_show';
import {fetchBoard, updateBoard} from '../../actions/board_actions';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import {fetchPins} from '../../actions/pin_actions'


const mapStateToProps = (state, ownProps) => {
    debugger
    let pins = (Object.getOwnPropertyNames(state.entities.boards).length !== 0) ? state.entities.boards[ownProps.match.params.boardId].pin_ids.map(pinId => state.entities.pins[pinId]) : [];
    debugger
    return {
    board: state.entities.boards[ownProps.match.params.boardId],
    pins: pins,
    user: state.entities.users[state.session.currentUser] || -0
}

}

const mapDispatchToProps = dispatch => {
    // debugger
return {
    fetchBoard: id => dispatch(fetchBoard(id)),
    fetchPins: () => dispatch(fetchPins())
}
    
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow))