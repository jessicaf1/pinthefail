import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { bindActionCreators } from 'redux';

export default function modalReducer(state = null, action) {
    switch (bindActionCreators.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}