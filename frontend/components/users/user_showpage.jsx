import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container'

class UserShowPage extends React.Component {
    constructor(props){
        super(props)
    }

componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
}


render(){

return(
    <NavBarContainer/>,
    <p>hi this is the user show page</p>
)

}


}

export default UserShowPage