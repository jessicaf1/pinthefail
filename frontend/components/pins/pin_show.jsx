//what needs to be here besides the actual pin itself 

import React from 'react';
import { withRouter } from 'react-router-dom';
import PinBoardContainer from './pin_to_board_container'

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


    if (this.props.boards === undefined) {
      debugger
      return null
    }
    let arr = this.props.boards.map(board => {
      // debugger
      return <li>{board.name}</li>
    }) 

    return(
      <div>
        <img id="pin-edit" src={window.pencil} onClick={()=> {this.props.openModal(this.props.pin.id)}} alt=""/>
       
        <div id="pin-name">{this.props.pin.name}</div>

        <div id="pin-description">{this.props.pin.link_url}</div>
        <div id="pin-user">{this.props.user.f_name ? 'uploaded by ' + this.props.user.f_name + " " + this.props.user.l_name : null } </div>
        <div id="pin-dd">
          <PinBoardContainer pinId={this.props.pin.id}/> 
          </div>
          <div id="pin-boards">{arr}</div>
      </div>
    )
  }

}

export default withRouter(PinShow)