import React from 'react';
import { Link } from 'react-router-dom';

class NavList extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    let userStatus;
    if (!this.props.currentUser) {
      userStatus = (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
        </div>
      );
    } else {
      userStatus = (
        <div>
          <h1>Welcome {this.props.currentUser.fname}!</h1>
          <form onSubmit={this.handleLogout}>
            <button>Log Out</button>
          </form>
        </div>
      );
    }


    return (
      <div>
        {userStatus}
      </div>
    );
  }
}

export default NavList;
