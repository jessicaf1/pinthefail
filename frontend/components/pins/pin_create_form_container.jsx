import { connect } from 'react-redux';
import PinCreateForm from './pin_create_form';
import { createPin } from '../../actions/pin_actions';
import { fetchBoards } from '../../'
import { openModal, closeModal } from '../../actions/modal_actions'
import { create } from 'domain';

const mapStateToProps = state => {
    return{
        pin: {name: '', link_url:''}
    }
}

const mapDispatchToProps = state => {
    return {
        createPin: pin => dispatch(createPin(pin)),
        fetchBoards: () => dispatch(fetchBoards()),
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal())
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PinCreateForm)