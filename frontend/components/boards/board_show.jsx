import React from 'react';
import UserShowContainer from '../../components/users/user_showpage_container'
import {Link} from 'react-router-dom'

class BoardShow extends React.Component {
  constructor(props){
    super(props);
   
  }

componentDidMount(){
  this.props.fetchBoard(this.props.match.params.boardId) 

}
render(){
  // debugger
  // if (this.props.board === undefined) {
  //   debugger
  //   return null
  // }
  // if(this.props.board.pinPhotos === undefined){
  //   debugger
  //   return null 
  // }
  // let arr = this.props.board.pinPhotos.map(pinPhoto => {
  //   // debugger
  //   return <img className="board-show-item" src={pinPhoto} alt="" />
  //   }) 

  if (this.props.pins === undefined) {
    debugger
    return null
  }
 
  let array = this.props.pins.map(pin => {
    // debugger

    return <Link to={`/users/${this.props.user.id}/pins/${pin.id}`}><img className="board-show-item" src={pin.photoUrl} alt="" /></Link>
  }) 
 

 return  (
   <div>
     <UserShowContainer /> 
     <ul>
     <div className="board-show-header-container">
          <div className="board-show-header">{this.props.board.name}</div>
          {this.props.board.pin_ids.length} <span> Pins </span>
      </div>
      <div className="board-show-pics">
    
      {array}
      </div>
    </ul>
    </div>
  )
 } 
}

export default BoardShow

//here i want collection of boards that are each grids with tiny versions of their pins inside of them?