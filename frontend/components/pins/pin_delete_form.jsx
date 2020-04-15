import React from 'react';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';

class PinDeleteForm extends React.Component {
    constructor(props){
        debugger
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.state = {...this.props.pin}
    }



handleDelete(e){
    debugger
    this.props.deletePin(this.state.id)
    .then(this.props.closeModal(),
    this.props.history.push(`/users/${this.props.user.id}/pins`));
}

render(){
    return(
        <div>
            <form className="deletePin">
            <div className="deletePin-h">Are you sure?</div>
            <div className="deletePin-sub-h">Once you delete a pin, you can't undo it!</div>
            <div className="delete-buttons">
            <button id="deleteCancel" onClick={this.props.closeModal}>Cancel</button>
            <button id="deleteSubmit" onClick={this.handleDelete}>Delete Pin</button>
            </div>
            </form>
        </div>
    )
}


}

export default withRouter(PinDeleteForm)