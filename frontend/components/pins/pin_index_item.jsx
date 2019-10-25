import React from 'react';
import { Link } from 'react-router-dom';

import PinDropDownContainer from './pin_drop_down_form_container'

 class PinIndexItem extends React.Component {
     constructor(props){
         super(props)

         this.stopModal = this.stopModal.bind(this);
         this.MouseHover = this.MouseHover.bind(this);
         this.state = {
             isHovering: false 
         }
        //  this.sendToPinShow = this.sendToPinShow.bind(this);
     }

     toggleHoverState(state) {
         return {
             isHovering: !state.isHovering,
         };
     }

     MouseHover() {
         this.setState(this.toggleHoverState);
     }

     sendToPinShow(e) {
        e.preventDefault();
        this.props.history.push(`/users/${this.props.currentUser.id}/pins/${this.props.pin.id}`)
    }
    
    stopModal(e) {
        // e.stopPropagation()
        this.props.openModal(this.props.pin.id)
        debugger
       
        this.props.history.push("/")
  
    }

     render() {
     return (
         <div onMouseEnter={this.MouseHover}
             onMouseLeave={this.MouseHover} className="grid-div">
         
             
             <img onClick={() => {
                
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