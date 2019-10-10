import React from 'react';

class BoardShow extends React.Component {
  constructor(props){
    super(props);
   
  }

componentDidMount(){
  //this.props.fetchBoard(this.props.match.params.boardId) this doesn't work, only thing params will get me userId 

}
render(){
  if(this.props.board.pinPhotos === undefined){
    return null 
  }
  let arr = this.props.board.pinPhotos.map(pinPhoto => {
    // debugger
    return <img className="board-show-item" src={pinPhoto} alt="" />
    }) 

 return  (
   <div>
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