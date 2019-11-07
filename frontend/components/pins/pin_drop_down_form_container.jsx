import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
import PinDropDown from './pin_drop_down_form';
import {fetchBoards} from '../../actions/board_actions';
import { Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';


export const mapStateToProps = state => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.currentUser],
    boards: Object.values(state.entities.boards)
  }
}

export const mapDispatchToProps = dispatch => {
  
  return {
    openModal: () => dispatch(openModal('createBoard')),
    fetchBoards: () => dispatch(fetchBoards())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinDropDown)