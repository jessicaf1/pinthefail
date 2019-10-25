// import {fetchBoards} '../../actions/board_actions';
// import {openModal, closeModal} from '../../actions/modal_actions'
import { connect } from 'react-redux';
import PinShow from './pin_show';
import { fetchPin, updateBoard } from '../../actions/pin_actions';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions'


const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    pin: state.entities.pins[ownProps.match.params.pinId]
  }
}

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    fetchPin: id => dispatch(fetchPin(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinShow))