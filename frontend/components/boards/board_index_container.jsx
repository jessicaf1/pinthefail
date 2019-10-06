import {connect} from 'react-redux';
import BoardIndex from './board_index';
import { fetchBoard } from '../../actions/board_actions';
import {fetchBoards} from '../../actions/board_actions';
import {openModal} from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        boards: Object.values(state.entities.boards),
        currentUser: state.entities.users[state.session.currentUser]
    } 
}

const mapDispatchToProps = dispatch => {
    return {
    fetchBoard: id => dispatch(fetchBoard(id)),
    fetchBoards: () => dispatch(fetchBoards()),
    openModal: modal => dispatch(openModal(modal))
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex)