import React from 'react';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';

class UserEditForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.state = { f_name: '', l_name: '', location: '', username: '', description:'' }
    }

    handleInput(field){
        return(e) => {
            this.setState({[field]: e.target.value})
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateUser(this.state);
    }

    handleCancel(e){
        e.preventDefault();
        this.props.history.push('/users/:userId');
    }

    render(){
        return(
    <div className="editForm">
        <div>Edit Profile</div>
        <div>People on pinthefail will get to know you with the info below</div>
        <div className="edit-top-button" onClick={this.handleCancel}>Cancel</div>
        <div className="edit-top-button" onClick={this.handleSubmit}>Done</div>
    <form>
            <label>
                First Name
                 <input type="text" value={this.state.f_name} onChange={this.handleInput('f_name')} placeholder={this.state.email}/>
            </label>
            <label>
                Last Name 
            <input type="text" value={this.state.l_name} onChange={this.handleInput('l_name')} placeholder="Ex. Smith"/>
            </label>
            <label>
                Username 
            <input type="text" value={this.state.username} onChange={this.handleInput('username')} placeholder="?"/>
            </label>
            <textarea value={this.state.description} placeholder="Write a little bit about yourself here">
                About Your Profile
            </textarea>
            <label>
                Location 
            <input type="text" value={this.state.location} onChange={this.handleInput('location')}/>
            </label>
    </form>
    </div>
        ) 
    } 

}

export default UserEditForm