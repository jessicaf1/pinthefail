import React from 'react';
import PinDropDownContainer from './pin_drop_down_form_container'

 class PinIndexItem extends React.Component {
     constructor(props){
         super(props)
     }


     render() {
     return (
     <div className="grid-div">
         <img className="grid-item" src={this.props.pin.photoUrl} alt=""/>  

                 <img id="grid-item-image"src={window.logo} onClick={()=>this.props.openModal(this.props.pin.id)}/>
             {/* <PinDropDownContainer />  */}
            
     </div>
     ) 
     }
 }
//  export default PinIndexItem;

 import { connect } from 'react-redux';
 import { openModal } from '../../actions/modal_actions';


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

 export default connect(mapStateToProps, mapDispatchToProps)(PinIndexItem)