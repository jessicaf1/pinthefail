// import {fetchBoards} '../../actions/board_actions';
// import {openModal, closeModal} from '../../actions/modal_actions'
import { connect } from 'react-redux';
import PinShow from './pin_show';
import { fetchPin, updateBoard } from '../../actions/pin_actions';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions'


const mapStateToProps = (state, ownProps) => {
  debugger
    let boards = (Object.getOwnPropertyNames(state.entities.pins).length !==  0) ? state.entities.pins[ownProps.match.params.pinId].board_ids.map(boardId => state.entities.boards[boardId]) : -0;
  debugger
  return {
    pin: state.entities.pins[ownProps.match.params.pinId],
    user: state.entities.users[state.session.currentUser] || -0, 
    boards: boards 
    }
} 
const mapDispatchToProps = dispatch => {
  // debugger
  return {
    fetchPin: id => dispatch(fetchPin(id)),
    openModal: id => dispatch(openModal('editPin', id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinShow))