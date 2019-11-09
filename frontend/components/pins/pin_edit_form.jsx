import React from 'react';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';
import PinBoardContainer from './pin_to_board_container';
import PinDropDownContainer from './pin_drop_down_form_container';

class EditPinForm extends React.Component {
  constructor(props){
    debugger
    super(props)
    const {pin} = this.props; 
    this.state = {
      pin: {
        id: pin.id,
        board_id: pin.board_id, 
        name: pin.name,
        link_url: pin.link_url || '',
        photoUrl: pin.photoUrl, 
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.chooseBoard = this.chooseBoard.bind(this);
    this.sendToBadPinBoard = this.sendToBadPinBoard.bind(this)
  }


  chooseBoard(boardId) {
    debugger
    this.setState({ boardId })

  }

  componentDidMount() {
    this.props.fetchPin(this.props.pin.id)
  }

 sendToBadPinBoard(){
    this.props.openModal2(),
    setTimeout(this.props.closeModal, 1200)
  }

handleSubmit(e){
  debugger
  e.preventDefault();
  let payload = {pin: this.state.pin, boardId: this.state.boardId}
  this.props.updatePin(payload).then(()=> this.props.closeModal())
  .then(()=>this.sendToBadPinBoard())
}

  handleInput(field) {
    debugger
    return (e) => {
      this.setState({ pin: {...this.state.pin, [field]: e.target.value} })
    }
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.closeModal()
  }

  // handleDelete(e){
  //   debugger
  //   e.preventDefault();
  //   this.props.deletePin(this.state.pin.id)
  //   .then(this.props.closeModal())
  //   .then(()=> this.props.history.push(`/users/${this.props.user.id}/pins`));
  // }

  handleDelete(e){
    this.props.openModal(this.state.pin.id)
  }

  render(){
    const {pin} = this.state;
    if (pin) {
    return(
      <form className="edit-pin">
        <div id="edit-pin-header">Edit this Pin</div> 
        <div className="edit-cancel" onClick={this.props.closeModal}>X</div>
        <div className="edit-pin-top">
           {/* <div id="pin-dd-e"> */}
              <div className="edit-category edit-category-b">Board</div> 
              <PinDropDownContainer version={"edit"} history={this.props.history.location.pathname.split('/').slice(this.props.history.location.pathname.split('/').length - 1) } chooseBoard={this.chooseBoard}/> 
           {/* </div> */}
           <img id="edit-photo" src={this.state.pin.photoUrl} alt=""/>
           </div>
        <label>
          <div className="edit-title">
          <div className="edit-category edit-category-t">Title</div>
          <input className="edit-name edit-name-title" type="text" value={this.state.pin.name} onChange={this.handleInput('name')}/>
         </div>
        </label>
        <label>
        <div className="edit-title">
          <div className="edit-category">Description</div>
           <input className="edit-name edit-name--description" type="text" value={this.state.pin.link_url} onChange={this.handleInput('link_url')} />
           </div>
        </label>
        <div className="pin-edit-buttons">
            <button className="pin-edit-button-1" onClick={this.handleDelete}>Delete</button>
            <button className="hiddenpin"></button>
            
              <button className="pin-edit-button-1" onClick={this.handleCancel}>Cancel</button>
               
               
                <button className="pin-edit-button" onClick={this.handleSubmit}>Save</button>
           </div>
      </form>
           
    )

  }
    else {
      return <div></div>
    }
  } 
}

export default withRouter(EditPinForm)