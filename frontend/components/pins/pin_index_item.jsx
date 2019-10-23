import React from 'react';
import PinDropDownContainer from './pin_drop_down_form_container'

 class PinIndexItem extends React.Component {
     constructor(props){
         super(props)
     }
     render() {
     return (
     <div className="grid-div">
         <img className="grid-item" src={props.pin.photoUrl} alt=""/>  
        
                 <img id="grid-item-image"src={window.logo} />
             {/* <PinDropDownContainer />  */}
            
     </div>
     ) 
     }
 }
 export default PinIndexItem;

 import { connect } from 'react-redux';
 