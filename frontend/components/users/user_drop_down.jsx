
import React from 'react';


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
    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu)
      });
    }
  }

  render() {

    return (
      <div>
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
                <button>Create Board</button>
                <button>Create Pin</button>

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