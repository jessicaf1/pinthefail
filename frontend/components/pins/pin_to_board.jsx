import React from 'react';
import { Link, Route, HashRouter, Switch, withRouter } from 'react-router-dom';
import PinDropDownContainer from './pin_drop_down_form_container';


class PinToBoard extends React.Component {
  constructor(props) {

    super(props);

    // console.log(this.props.currentUser)
    this.state = { ...this.props.pin };
    debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    // this.handleFile = this.handleFile.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.chooseBoard = this.chooseBoard.bind(this);

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

  handleSubmit(e) {
    e.preventDefault();
    let board_pin = {pin_id: this.props.pinId, board_id: this.state.boardId} 
    this.props.createBoardPin(board_pin).then(() => this.props.closeModal())
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
              <div id="save-form-text">Choose Board </div>
              <PinDropDownContainer chooseBoard={this.chooseBoard} />
            </div>

            <div className="save-form-bottom">
            <img className="grid-item" src={this.props.pin.photoUrl} id="save-pic" alt="" />  
            <button className="pin-button" onClick={this.handleSubmit}>Save</button>
            </div>

        </form>
      </div>
    )
  }

}

export default PinToBoard;