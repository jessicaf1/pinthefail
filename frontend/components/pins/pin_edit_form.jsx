import React from 'react';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';
import PinBoardContainer from './pin_to_board_container'

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
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchPin(this.props.pin.id)
  }

handleSubmit(e){
  debugger
  e.preventDefault();
  this.props.updatePin(this.state.pin).then(()=> this.props.closeModal())
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
           <div id="pin-dd">
          <PinBoardContainer pinId={this.state.pin.id}/> 
          </div>
        <label>
          Title
          <input className="edit-name" type="text" value={this.state.pin.name} onChange={this.handleInput('name')}/>
        </label>
        <label>
          Description
           <input className="edit-name" type="text" value={this.state.pin.link_url} onChange={this.handleInput('link_url')} />
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