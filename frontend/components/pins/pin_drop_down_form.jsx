
import React from 'react';
import { Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';

class PinDropDown extends React.Component {
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
    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu)
      });
    }
  }

  render() {
      debugger
      let arr = this.props.boards.map(board => { 
          return <div>{board.name}</div>
      })
  debugger
    return (
      <div className="container">
        <div onClick={this.showMenu}>
          Select 
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
                <div className="pinsbuilder" onClick={this.props.openModal}>Board 1</div>
                <Link className="pinsbuilder" to="/users/pinBuilder">Board 2</Link>
                {this.props.board ? 
                this.props.board.map(board => {
                    return <li>{board.name}</li>
                }) : null 
                }
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

export default PinDropDown; 