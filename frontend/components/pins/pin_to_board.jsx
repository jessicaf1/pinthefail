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
    this.handleFile = this.handleFile.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.chooseBoard = this.chooseBoard.bind(this);

  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }

  componentDidMount(){
    this.props.fetchPin(this.props.props)
  }

  chooseBoard(boardId) {
    debugger
    this.setState({ boardId })

  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pin[name]', this.state.name);
    formData.append('pin[id]', this.state.id);
    formData.append('pin[link_url]', this.state.link_url);

    if (this.state.photoFile) {
      formData.append('pin[photo]', this.state.photoFile);
    }
    debugger
    this.props.updatePin(formData, this.state.boardId).then(() => this.props.closeModal())
  }
  handleFile(e) {

    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ photoUrl: reader.result, photoFile: file });
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
  }


  handleCancel(e) {
    e.preventDefault();
    this.props.closeModal;
  }


  render() {
    return (
      <div>
        <form className="pin-cf">
          {/* <div className="box"></div> */}
          <div>Choose Board </div>
          <PinDropDownContainer chooseBoard={this.chooseBoard} />
          <button className="pin-button" onClick={this.handleSubmit}>Save</button>

        </form>
      </div>
    )
  }

}

export default PinToBoard;