
import React from 'react';
import SignupContainer from './session/signup_container';
import Modal from './modal'
import PinsIndexContainer from '../components/pins/pin_index_container'

class Background extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    if (!this.props.loggedin) {
      this.props.openModal('login')
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.loggedin && !this.props.loggedin){
      this.props.openModal('login')
    }
  }

  render() {
    return (
      <div>
        <PinsIndexContainer/> 
      </div>
    ) 
  }

}


import { connect } from 'react-redux';
import { openModal, closeModal } from '../actions/modal_actions'; 
import { signup } from '../actions/session_actions'

export const mapStateToProps = (state) => {
  // debugger
  return {
    errors: state.errors.session,
    formType: 'signup',
    loggedin: Boolean(state.session.currentUser)
  }
}

export const mapDispatchToProps = (dispatch) => {

  return {

    processForm: (user) => dispatch(signup(user)),
    otherForm: () => dispatch(openModal('login')),
    openModal: (modal) => {
      // debugger
      return dispatch(openModal(modal))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Background)






