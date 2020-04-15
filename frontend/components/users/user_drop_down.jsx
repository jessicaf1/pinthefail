
import React from 'react';
import { Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';

class UserDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    debugger
    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu)
      })
    }
    else if (event.target.innerText === 'Create Board'){
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu)
      })
    }
  }

  render() {
  debugger
    return (
      <div className="container">
        <div onClick={this.showMenu}>
          <img className="image-plus" id="showpage-button" src={window.plus} />
        </div>
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}>
                <div className="containerdd">
                <div className="pinsbuilder" onClick={this.props.openModal}>Create Board</div>
                <Link className="pinsbuilder" to="/users/pinBuilder">Create Pin</Link>
                </div>
                </div>
            )
            :
            (null)
        }
      </div>
    );
  }
}

export default UserDropDown; 