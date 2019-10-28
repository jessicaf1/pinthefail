import EditPinForm from './pin_edit_form';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPin, updatePin, deletePin } from '../../actions/pin_actions'
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';

export const mapStateToProps = (state, ownProps) => {
  return {
    pin: state.entities.pins[ownProps.pinId],
    user: state.entities.users[state.session.currentUser] || -0
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePin: pin => dispatch(updatePin(pin)),
    deletePin: id => dispatch(deletePin(id)),
    fetchPin: id => dispatch(fetchPin(id)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPinForm)