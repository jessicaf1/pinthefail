import {connect} from 'react-redux';
import BoardIndex from './board_index';
import { fetchBoard } from '../../actions/board_actions';
import {fetchBoards} from '../../actions/board_actions';
import {openModal} from '../../actions/modal_actions';
import { fetchPin, fetchPins } from '../../actions/pin_actions'

const mapStateToProps = state => {
   let boards = Object.values(state.entities.boards);
   let currentUser = state.entities.users[state.session.currentUser]
//    let pins = Object.values(state.entities.pins)
   debugger
    return {
        currentUser, 
        boards
        
    } 
}

const mapDispatchToProps = dispatch => {
    return {
    fetchBoard: id => dispatch(fetchBoard(id)),
    fetchBoards: () => dispatch(fetchBoards()),
    openModal: modal => dispatch(openModal(modal)),
    fetchPin: id => dispatch(fetchPin(id)),
    fetchPins: () => dispatch(fetchPins())
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex)