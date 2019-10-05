import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
import UserDropDown from './user_drop_down';

const mapStateToProps = state => {

  return {
    currentUser: state.entities.users[state.session.currentUser]

  }
}

const mapDispatchToProps = dispatch => {

  return {
    openModal: modal => {
      return dispatch(openModal(modal));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDropDown)