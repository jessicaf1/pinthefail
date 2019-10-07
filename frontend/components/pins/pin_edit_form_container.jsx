import EditPinForm from './pin_edit_form';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPin, updatePin } from '../../actions/pin_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    pin: state.entities.pins[ownProps.match.params.pinId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePin: pin => dispatch(updatePin(pin)),
    fetchPin: id => dispatch(fetchPin(id)), 
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPinForm)