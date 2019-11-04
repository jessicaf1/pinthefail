import React from 'react';
import { Link, Route, HashRouter, Switch, withRouter } from 'react-router-dom';
import PinDropDownContainer from './pin_drop_down_form_container';


class PinToBoard extends React.Component {
  constructor(props) {

    super(props);

    // console.log(this.props.currentUser)
    this.state = { ...this.props.pin, alert: false };
    debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    // this.handleFile = this.handleFile.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.chooseBoard = this.chooseBoard.bind(this);
    this.catchErrors = this.catchErrors.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.sendToBadPinBoard = this.sendToBadPinBoard.bind(this);
    this.sendToPins = this.sendToPins.bind(this)
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }

  // componentDidMount(){
  //   this.props.fetchPin(this.props.pin.id)
  // }

  chooseBoard(boardId) {
    debugger
    this.setState({ boardId })

  }

  sendToBadPinBoard(){
    this.props.openModal('badPinBoard')
  }

  sendToPins(){
    this.props.history.push(`/users/${this.props.user.id}/pins`)
  }

  catchErrors(){
    if (this.props.errors.length === 0) {
      debugger 
    this.sendToPins()
   }
   else {
      this.sendToBadPinBoard()
   } 
  }

  closeModal(){
    debugger
    this.catchErrors()
    // this.props.closeModal()
    this.props.history.push(`/users/${this.props.user.id}/pins`)
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    let board_pin = {pin_id: this.props.pinId, board_id: this.state.boardId} 
    debugger
    this.props.createBoardPin(board_pin).then(
      () => this.closeModal(),
      () => this.closeModal()
    )
 

    // if (this.props.history.location.pathname.split('/').length > 4) {
    //   debugger
    //   this.props.history.push(`/users/${this.props.user.id}/pins`)
      
    // }
  } 

  // handleFile(e) {

  //   const reader = new FileReader();
  //   const file = e.currentTarget.files[0];
  //   reader.onloadend = () => {
  //     this.setState({ photoUrl: reader.result, photoFile: file });
  //   };
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   } else {
  //     this.setState({ photoUrl: "", photoFile: null });
  //   }
  // }


  handleCancel(e) {
    e.preventDefault();
    this.props.closeModal;
  }


  render() {
    return (
      <div>
        <form className="save-form">
          {/* <div className="box"></div> */}
          
            <div className="save-form-header">
              <div id="save-form-text">Select Board </div>
              <PinDropDownContainer chooseBoard={this.chooseBoard} />
            </div>

            <div className="save-form-bottom">
            <img className="grid-item-pb" src={this.props.pin.photoUrl} id="save-pic" alt="" />  
            <button className="pin-button" onClick={this.handleSubmit}>Save</button>
            </div>

        </form>
      </div>
    )
  }

}

export default withRouter(PinToBoard);