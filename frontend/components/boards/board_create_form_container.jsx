import BoardCreateForm from './board_create_form';
import {connect} from 'react-redux';
import {createBoard} from '../../actions/board_actions'
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = state => {
    return {
    // currentUser: state.users[state.session.currentUser]
    board: {name:'', description: ''}
    }
}

const mapDispatchToProps = dispatch => {
    return {
    createBoard: board => dispatch(createBoard(board)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardCreateForm)
