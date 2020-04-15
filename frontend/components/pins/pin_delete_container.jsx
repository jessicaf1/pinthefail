import PinDeleteForm from './pin_delete_form'
import { connect } from 'react-redux'
import { deletePin } from '../../actions/pin_actions'
import {closeModal} from '../../actions/modal_actions'
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        pin: state.entities.pins[ownProps.pinId],
        user: state.entities.users[state.session.currentUser]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePin: id => dispatch(deletePin(id)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinDeleteForm)