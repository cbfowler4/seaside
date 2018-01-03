import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';

class NavList extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleClickAuth(modal) {
    return (e) => {
      const auth = document.getElementsByClassName(`${modal}`);
      auth[0].classList.remove('hide-modal');

    };
  }

  render() {
    let userStatus;
    if (!this.props.currentUser) {
      userStatus = (
        <div className='nav-right'>
          <a href='#' onClick={this.handleClickAuth('signup')}>Sign Up</a>
          <a href='#' onClick={this.handleClickAuth('login')}>Log In</a>
        </div>
      );
    } else {
      userStatus = (
        <div className='nav-right'>
          <h1>Welcome {this.props.currentUser.fname}!</h1>
          <form onSubmit={this.handleLogout}>
            <button>Log Out</button>
          </form>
        </div>
      );
    }


    return (
      <nav className='nav-bar-main'>
        <div className='nav-left'>
          <Link className="icon-link" to='/'></Link>
          <SearchBar fetchRooms={this.props.fetchRooms}/>
        </div>
        {userStatus}
      </nav>
    );
  }
}

export default NavList;
