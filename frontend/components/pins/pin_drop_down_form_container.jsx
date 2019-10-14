import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
import PinDropDown from './pin_drop_down_form';

export const mapStateToProps = state => {

  return {
    currentUser: state.entities.users[state.session.currentUser],
    boards: Object.values(state.entities.boards)
  }
}

export const mapDispatchToProps = dispatch => {
  
  return {
    openModal: () => dispatch(openModal('createBoard')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinDropDown)