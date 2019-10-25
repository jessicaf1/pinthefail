import { connect } from 'react-redux';
import { fetchPin, updatePin } from '../../actions/pin_actions';
import { createBoardPin } from '../../actions/board_pin_actions'
import PinToBoard from './pin_to_board';
import { closeModal } from '../../actions/modal_actions';
import { withRouter, Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';

export const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    pin: state.entities.pins[ownProps.pinId]
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    createBoardPin: (board_pin) => dispatch(createBoardPin(board_pin)),
    fetchPin: id => dispatch(fetchPin(id)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinToBoard)