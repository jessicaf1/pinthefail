//here i want each board Item to be a collection of 6 of the images it has in a tiny grid

import React from 'react';
const BoardIndexItem = props => {
  let pinsArr; 
  if(props.pinIds.length > 0){
    debugger
      pinsArr = props.pinIds.map(pinId => {
      return props.pins[pinId].photoUrl  
  })
  }
  else {
    return ''
  }
  return (
  <div>
    <ul>
    {props.board.name}
    {pinsArr}
    </ul>
  </div>
  ) 
}
export default BoardIndexItem;


