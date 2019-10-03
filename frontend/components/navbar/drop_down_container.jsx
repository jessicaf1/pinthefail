import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'
import DropDown from './drop_down';

const mapStateToProps = state => {
  
  return {
    currentUser: state.entities.users[state.session.currentUser]

  }
}

const mapDispatchToProps = dispatch => {
  
  return {
    logout: () => dispatch(logout()),
    openModal: modal => {
   
      return dispatch(openModal(modal));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDown)