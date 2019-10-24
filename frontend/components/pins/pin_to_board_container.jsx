import { connect } from 'react-redux';
import { fetchPin, updatePin } from '../../actions/pin_actions';
import PinToBoard from './pin_to_board';
import { closeModal } from '../../actions/modal_actions';
import { withRouter, Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';

export const mapStateToProps = (state, ownProps) => {
  debugger
  return {
  // pin: state.entities.pins[ownProps.match.params.pinId]
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    updatePin: (pin, id) => dispatch(updatePin(pin, id)),
    fetchPin: id => dispatch(fetchPin(id)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinToBoard)