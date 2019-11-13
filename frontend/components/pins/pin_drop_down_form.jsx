
import React from 'react';
import { Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';

class PinDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false, board: null, thumb:false }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.combo = this.combo.bind(this);
    this.showThumb = this.showThumb.bind(this);
    this.noThumb = this.noThumb.bind(this)
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
    else if (this.combo) {
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

  showThumb(id){
    return () => {
    this.setState({thumb: id})
    } 
  }

  noThumb(){
    this.setState({thumb: null})
  }

  render() {
      debugger
      let arr = this.props.boards.map(board => { 
        debugger
        return <div className="boardlist1"><li><a className="board-list" onMouseEnter={this.showThumb(board.id)} onMouseLeave={this.noThumb} onClick={this.combo(board)}>{board.name}</a>
         {this.state.thumb === board.id ? <img id="thumb-dd" src={window.logo}></img> : null}
        </li></div>
        
      })
  // debugger
    return (
      <div className="pincontainer">
        <div id="pincontainer-menu" onClick={this.showMenu}>
          <div id={this.props.version === "new" ? "selectButton2" 
          : this.props.version === "pinboard" ? "selectButton"
          : "selectButton3"}
          >{ this.state.board ? this.state.board.name : "select a board" + "  " + "▼"}</div>
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
                <ul className="board-list-items">{arr}</ul>
               
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