import React from 'react';
import { Link } from 'react-router-dom';

import PinDropDownContainer from './pin_drop_down_form_container'

 class PinIndexItem extends React.Component {
     constructor(props){
         super(props)

         this.stopModal = this.stopModal.bind(this);
         this.MouseHoverIn = this.MouseHoverIn.bind(this);
         this.MouseHoverOut = this.MouseHoverOut.bind(this);
         this.MouseImageHover = this.MouseImageHover.bind(this)
         this.state = {
             isHovering: false, 
             isHoveringOnThumb: false
         }
        //  this.sendToPinShow = this.sendToPinShow.bind(this);
     }

     toggleHoverState(state) {
         return {
             isHovering: !state.isHovering,
         };
     }

     toggleHoverStateOff() {
         return {
             isHovering: false,
         };
     }

     MouseHoverIn(e) {
        // debugger
        // console.log(e.relatedTarget)
            this.setState({isHovering: true})
     }

     MouseHoverOut() {
         if (this.state.isHoveringOnThumb === false){
         this.setState({isHovering: false})
         } 
         else {
             this.setState({isHovering: true}); 
         }
     }

     MouseImageHover(state){
         debugger
         this.setState({isHoveringOnThumb: true})
        //  if (state.isHovering === true){
        //  this.setState({isHovering: true})
        //  } 
        //  else {
        //      this.setState({isHovering: false})
        //  }
     }

     sendToPinShow(e) {
        e.preventDefault();
        this.props.history.push(`/users/${this.props.currentUser.id}/pins/${this.props.pin.id}`)
    }
    
    stopModal(e) {
        e.stopPropagation()
        this.MouseHover();
        this.props.openModal(this.props.pin.id)
        debugger
       
        this.props.history.push("/")
  
    }


     render() {
     return (
         <div  
         onMouseEnter={this.MouseHoverIn}
             onMouseOut={this.MouseHoverOut} 
             className="grid-div">
         
             
             <img 
            
                 onMouseEnter={this.MouseImageHover}
             onClick={() => {
                
                // this.toggleHoverState(this.state)
                this.props.history.push(`/users/${this.props.currentUser.id}/pins/${this.props.pin.id}`)
                } 
            }
                     className="grid-item" src={this.props.pin.photoUrl} alt="" />  
                 {this.state.isHovering && <img img id="grid-item-image" src={window.logo} onClick={this.stopModal}/>}
                

               
             {/* <PinDropDownContainer />  */}
            
     </div>
     ) 
     }
 }
//  export default PinIndexItem;

 import { connect } from 'react-redux';
 import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

 export const mapStateToProps = state => {
     return {
         currentUser: state.entities.users[state.session.currentUser]
     }
 }

 export const mapDispatchToProps = dispatch => {
     return {
         openModal: (id) => dispatch(openModal('savePinToBoard', id))
     }
 }

 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinIndexItem))