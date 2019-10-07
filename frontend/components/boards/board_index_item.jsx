//here i want each board Item to be a collection of 6 of the images it has in a tiny grid

import React from 'react';
const BoardIndexItem = props => {
  return (
  <div>
    {props.board.name}
  </div>
  ) 
}
export default BoardIndexItem;


