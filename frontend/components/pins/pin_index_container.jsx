import {connect} from 'react-redux';
import PinIndex from './pin_index';
import {fetchPins, fetchPin} from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions'

const mapStateToProps = state => {
    debugger
    let pins = Object.values(state.entities.pins); 
    let boards = Object.values(state.entities.boards)
    return {
        pins, boards 
    }
}

const mapDispatchToProps = dispatch => {
    debugger
    return{
        fetchPin: id => dispatch(fetchPin(id)),
        fetchPins: () => dispatch(fetchPins()), 
        fetchBoards: () => dispatch(fetchBoards())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex)