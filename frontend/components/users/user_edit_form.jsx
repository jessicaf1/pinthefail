import React from 'react';
import { Link } from 'react-router-dom';

class UserEditForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render(){
        return(
    <div classnName="editForm">
    <div>People on pinthefail will get to know you with the info below</div>
    <form>
        <label htmlFor=""></label>

       
    </form>
    </div>
        ) 
    } 

}

export default UserEditForm