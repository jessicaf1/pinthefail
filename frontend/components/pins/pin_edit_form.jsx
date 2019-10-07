import React from 'react';


class EditPinForm extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.state = this.props.board; 
  }

  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId)
  }

handleSubmit(e){
  e.preventDefault();
  this.props.updatePin(this.state) 
}

  handleInput(field) {
    return (e) => {
      this.setState = ({ [field]: e.target.value })
    }
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.closeModal
  }

  render(){
    return(
      <form>
        <label>
          Title
          <input type="text" value={this.state.name} onChange={this.handleInput('name')}/>
        </label>
        <label>
          Website
           <input type="text" value={this.state.link_url} onChange={this.handleInput('link_url')} />
        </label>
      </form>
    )
  }



}

export default EditPinForm