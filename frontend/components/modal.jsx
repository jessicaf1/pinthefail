import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LoginContainer from '../components/session/login_container';
import SignupContainer from '../components/session/signup_container';
import BoardCreateFormContainer from '../components/boards/board_create_form_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  debugger
  switch (modal) {
    case 'login':
      debugger
      component = <LoginContainer />;
      break;
    case 'signup':
      debugger
      component = <SignupContainer />;
      break;
    case 'create board':
      debugger
      component = <BoardCreateFormContainer/>;
    default:
      return null;
  }
  return (
    <div id="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  debugger
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  debugger
  return {
    closeModal: () => {
      debugger 
      return dispatch(closeModal())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
