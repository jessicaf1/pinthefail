import React from 'react';
import NavBar from './nav_bar';


class DropDown extends React.Component{
  constructor(props){
    super(props)
    this.state = { showMenu: false }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.logout = this.logout.bind(this)
  }

  showMenu(e){
    e.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
    
  closeMenu(){
    if (!this.dropdownMenu.contains(event.target)){

    this.setState({ showMenu: false}, ()=> {
      document.removeEventListener('click', this.closeMenu)
    });
  }
} 

  logout(){
    debugger
    this.props.logout();
  }

  render(){
    
    return (
      <div className="container">
        <div onClick={this.showMenu}>
           <img className="dropdown-menu-button image" src={window.dots}/>
        </div>
      {
        this.state.showMenu 
        ? (
            <div 
            className="menu"
              ref={(element) => {
                this.dropdownMenu = element;
              }}>
          <button onClick={this.logout} className="menubutton">Log Out</button>
         
        
        </div>
      ) 
      : 
      (null)
      } 
      </div>
    );
  }
}

export default DropDown; 