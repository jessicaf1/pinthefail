//here i want each board Item to be a collection of 6 of the images it has in a tiny grid

import React from 'react';
import { withRouter } from 'react-router-dom'
const BoardIndexItem = props => {
  debugger
  // let pinsArr; 
  // debugger
  // if(props.pinIds.length > 0){
  //   debugger
  //     pinsArr = props.pinIds.map(pinId => {
  //     return <img src="" alt=""/>
  //     fetchPin(pinId).photoUrl 
  //     debugger
  // })
  // }
  // else {
  //   return ''
  // }
  //let arr = Array.from(props.fetchPins().filter(pin => props.pinIds.includes(pin.id)) )
  // debugger
  if(props.board.pinPhotos === undefined){
    return null 
  }
  let arr = props.board.pinPhotos.map((pinPhoto, i) => {
    // debugger
    return <img key={i} className="index-list-item" src={pinPhoto} alt="" />
    }) 

   const sendToBoardShow = e => {
        e.preventDefault();
        props.history.push(`/users/${props.currentUser.id}/boards/${props.board.id}`)
    }

    const openModal = () => {
      props.openModal()
    }

  return (
  
    
      <div className="boards-total">
              <div onClick={sendToBoardShow} className="boards-index-item">
                  {arr.slice(0,3)}
                </div>
              <div className="bi-title">{props.board.name}</div>
              {props.board.pin_ids.length} <span> Pins </span>
              <br/> 
          {/* <img className="showpage-pencil" src={window.pencil} alt="" onClick={openModal}/> */}
        </div>


  ) 
}
export default withRouter(BoardIndexItem);


