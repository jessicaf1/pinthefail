import {connect} from 'react-redux';
import PinIndex from '../pins/pin_index';
import {fetchPins, fetchPin} from '../../actions/pin_actions';

const mapStateToProps = state => {
    return {
        pins: Object.values(state.entities.pins)
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchPin: id => dispatch(fetchPin(id)),
        fetchPins: () => dispatch(fetchPins())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex)