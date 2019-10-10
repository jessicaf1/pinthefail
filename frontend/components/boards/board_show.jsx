import React from 'react';
import UserShowContainer from '../../components/users/user_showpage_container'

class BoardShow extends React.Component {
  constructor(props){
    super(props);
   
  }

componentDidMount(){
  this.props.fetchBoard(this.props.match.params.boardId) 

}
render(){
  debugger
  if (this.props.board === undefined) {
    return null
  }
  if(this.props.board.pinPhotos === undefined){
    return null 
  }
  let arr = this.props.board.pinPhotos.map(pinPhoto => {
    // debugger
    return <img className="board-show-item" src={pinPhoto} alt="" />
    }) 

 return  (
   <div>
     <UserShowContainer /> 
     <ul>
      <div className="board-show-header">{this.props.board.name}</div>
      {this.props.board.pin_ids.length} <span> Pins </span>
      <div className="board-show-pics">
      {arr}
      </div>
    </ul>
    </div>
  )
 } 
}

export default BoardShow

//here i want collection of boards that are each grids with tiny versions of their pins inside of them?