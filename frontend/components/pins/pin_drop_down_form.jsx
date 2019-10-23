
import React from 'react';
import { Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';

class PinDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false, board: null }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.combo = this.combo.bind(this);
  }

  componentDidMount(){
    this.props.fetchBoards()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.boards.length !== this.props.boards.length) {
      this.props.fetchBoards();
    }
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
  // handleSubmit(){
  //   this.props.handleSubmit
  // }

  combo(board){
    return(e) => {
      debugger
      e.preventDefault();
    this.setState({ board: board })
    this.props.chooseBoard(board.id)
    } 
  }


  render() {
      // debugger
      let arr = this.props.boards.map(board => { 
        debugger
        return <li><a className="board-list" onClick={this.combo(board)}>{board.name}</a></li>
      })
  // debugger
    return (
      <div className="pincontainer">
        <div onClick={this.showMenu}>
          <div id="selectButton">{ this.state.board ? this.state.board.name : "Select Board"}</div>
        </div>
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}>
                <div className="containerdd containerdd-p">
                {/* <div className="pinsbuilder" onClick={this.props.openModal}>Board 1</div>
                <Link className="pinsbuilder" to="/users/pinBuilder">Board 2</Link> */}
                {/* <button>Board 3</button> */}
                <ul>{arr}</ul>
                {/* {this.props.board ? 
                this.props.board.map(board => {
                    return <li>{board.name}</li>
                }) : null 
                } */}
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