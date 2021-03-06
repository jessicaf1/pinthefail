import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LoginContainer from '../components/session/login_container';
import SignupContainer from '../components/session/signup_container';
import BoardCreateFormContainer from '../components/boards/board_create_form_container';
import PinEditFormContainer from '../components/pins/pin_edit_form_container'
import BoardEditFormContainer from '../components/boards/board_edit_container'
import PinToBoardContainer from '../components/pins/pin_to_board_container'
import PinDeleteContainer from '../components/pins/pin_delete_container'
import BadPinBoard from '../components/pins/bad_pin_board'

function Modal({modal, props, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  // debugger
  switch (modal.type) {
    case 'login':
      // debugger
      component = <LoginContainer />;
      break;
    case 'signup':
      // debugger
      component = <SignupContainer />;
      break;
    case 'createBoard':
      // debugger
      component = <BoardCreateFormContainer/>;
      break;
    case 'updateBoard':
      component = <BoardEditFormContainer/>;
      break;  
    case 'savePin':
      component = <SavePinFormContainer/>;  
      break; 
    case 'savePinToBoard':
      debugger
      component = <PinToBoardContainer pinId={modal.props}/>; 
      break; 
    case 'editPin':
      component = <PinEditFormContainer pinId={modal.props}/>;
      break; 
    case 'deletePin':
      component = <PinDeleteContainer pinId={modal.props}/>;
      break; 
    case 'badPinBoard':
      component = <BadPinBoard/>
      break; 
    default:
      return null;
  }
  return (
    <div id="modal-background" onClick={(e) => {
      debugger
      e.stopPropagation();
      closeModal(); }}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  // debugger
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    closeModal: () => {
      // debugger 
      return dispatch(closeModal())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
