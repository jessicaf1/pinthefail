//what needs to be here besides the actual pin itself 

import React from 'react';
import { withRouter } from 'react-router-dom';

class PinShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchPin(this.props.match.params.pinId) 

  }



  render(){
    if (this.props.pin === undefined) {
      debugger
      return null
    }
    if(this.props.pin.photoUrl === undefined){
      debugger
      return null 
    }
    return(
      <div>
        <img id="pin-edit" src={window.pencil} onClick={()=> {this.props.openModal(this.props.pin.id)}} alt=""/>
        <img id="pin-show" src={this.props.pin.photoUrl} alt=""/>
        <div id="pin-name">{this.props.pin.name}</div>
        <div id="pin-description">{this.props.pin.link_url}</div>
      </div>
    )
  }

}

export default withRouter(PinShow)