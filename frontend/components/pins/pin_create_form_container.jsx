import { connect } from 'react-redux';
import CreatePinForm from './pin_create_form';
import { createPin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions'
import { openModal, closeModal } from '../../actions/modal_actions'


const mapStateToProps = state => {
    debugger
    return {
        pin: {name: '', link_url:''}, 
        user: state.entities.users[state.session.currentUser] || -0
    }
}

const mapDispatchToProps = dispatch => {
    debugger
    return {
        createPin: (pin, boardId) => dispatch(createPin(pin, boardId)),
        fetchBoards: () => dispatch(fetchBoards()),
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal())
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePinForm)