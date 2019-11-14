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
         this.MouseImageHoverOut = this.MouseImageHoverOut.bind(this);
         this.state = {
             isHovering: false, 
             isHoveringOnThumb: false
         }

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
            this.props.setHoveredPinId(this.props.pin.id)
            this.setState((state) => {return {isHovering: true}})
     }

     MouseHoverOut() {
 
        this.setState(state => state.isHoveringOnThumb === true ?
        {isHovering: true }
        :
        {isHovering: false}
        )
    }

     MouseImageHoverOut() {
         this.setState({isHoveringOnThumb: false});
         this.setState(state => state.isHovering === true?
            {isHovering: true}
            :
            {isHovering: false}
            )
     }

     MouseImageHover(){
        this.setState((state) => {return {isHovering: true}})
        this.setState((state) => {return {isHoveringOnThumb: true}})
     }

     sendToPinShow(e) {
        e.preventDefault();
        this.props.history.push(`/users/${this.props.currentUser.id}/pins/${this.props.pin.id}`)
    }
    
    stopModal(e) {
        e.stopPropagation()
        this.props.openModal(this.props.pin.id)
        this.setState({ isHovering: false })  
    }

    stopModal2(e) {
        e.stopPropagation()
        this.MouseImageHover();
        this.props.openModal2(this.props.pin.id)
        this.setState({ isHovering: false })
    }


     render() {
     return (
         <div className="grid-div">
             <img onMouseEnter={this.MouseHoverIn}
                  onMouseOut={this.MouseHoverOut}     
                 onClick={() => {
                
                this.props.history.push(`/users/${this.props.currentUser.id}/pins/${this.props.pin.id}`)
                } 
            }
                     className="grid-item" src={this.props.pin.photoUrl} alt="" />  
          
             { (this.state.isHovering && this.props.pin.id === this.props.hoveredPinId) ? <img img id="grid-item-image"  src={window.logo}  onMouseEnter={this.MouseImageHover} 
                                                                                        onMouseOut={this.MouseImageHoverOut} 
                                                                                        onClick={this.stopModal}/> : null } 
                
                { (this.state.isHovering && this.props.pin.id === this.props.hoveredPinId) ? <img img id="grid-item-image2"  src={window.pencil}  onMouseEnter={this.MouseImageHover} 
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