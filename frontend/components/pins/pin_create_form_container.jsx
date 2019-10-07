import { connect } from 'react-redux';
import CreatePinForm from './pin_create_form';
import { createPin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions'
import { openModal, closeModal } from '../../actions/modal_actions'


const mapStateToProps = state => {
    debugger
    return {
        pin: {name: '', link_url:''}
    }
}

const mapDispatchToProps = dispatch => {
    debugger
    return {
        createPin: pin => dispatch(createPin(pin)),
        fetchBoards: () => dispatch(fetchBoards()),
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal())
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePinForm)