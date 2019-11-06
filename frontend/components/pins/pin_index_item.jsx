import React from 'react';
import { Link } from 'react-router-dom';

import PinDropDownContainer from './pin_drop_down_form_container'

 class PinIndexItem extends React.Component {
     constructor(props){
         super(props)

         this.stopModal = this.stopModal.bind(this);
         this.stopModal2 = this.stopModal2.bind(this);
         this.MouseHoverIn = this.MouseHoverIn.bind(this);
         this.MouseHoverOut = this.MouseHoverOut.bind(this);
         this.MouseImageHover = this.MouseImageHover.bind(this);
        this.MouseImageHoverOut = this.MouseImageHoverOut.bind(this)
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
        //  debugger
         if (this.state.isHoveringOnThumb === true){
         this.setState({isHovering: true})
         } 
        //  else {
             this.setState({isHovering: false}); 
         }
    
// if ! (hovering on image && hovering on icon): dont show the icon
//  if hovering on icon but not image: then allow click action to open modal
     MouseImageHoverOut() {
         debugger
         this.setState({isHoveringOnThumb: false});
         if(this.state.isHovering === true){
             this.setState({isHovering: true})
         }
         debugger
     }

     MouseImageHover(){
        //  debugger
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
        this.MouseImageHover();
        this.props.openModal(this.props.pin.id)

        this.setState({ isHovering: false })
        debugger
       
        // this.props.history.push("/")
  
    }

    stopModal2(e) {
        e.stopPropagation()
        this.MouseImageHover();
        this.props.openModal2(this.props.pin.id)

        this.setState({ isHovering: false })
        debugger
       
        // this.props.history.push("/")
  
    }


     render() {
     return (
         <div  
         onMouseEnter={this.MouseHoverIn}
             onMouseOut={this.MouseHoverOut} 
             className="grid-div">
         
             
             <img 
            
                 
             onClick={() => {
                
                // this.toggleHoverState(this.state)
                this.props.history.push(`/users/${this.props.currentUser.id}/pins/${this.props.pin.id}`)
                } 
            }
                     className="grid-item" src={this.props.pin.photoUrl} alt="" />  
          
             { (this.state.isHovering || this.state.isHoveringOnThumb) ? <img img id="grid-item-image"  src={window.logo}  onMouseEnter={this.MouseImageHover} 
                                                                                        onMouseOut={this.MouseImageHoverOut} 
                                                                                        onClick={this.stopModal}/> : null } 
                
                { (this.state.isHovering || this.state.isHoveringOnThumb) ? <img img id="grid-item-image2"  src={window.pencil}  onMouseEnter={this.MouseImageHover} 
                                                                                        onMouseOut={this.MouseImageHoverOut} 
                                                                                        onClick={this.stopModal2}/> : null } 
               
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
         openModal: (id) => dispatch(openModal('savePinToBoard', id)),
         openModal2: (id) => dispatch(openModal('editPin', id))
     }
 }

 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinIndexItem))