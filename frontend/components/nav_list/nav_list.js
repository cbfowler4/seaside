import React from 'react';
import { Link } from 'react-router-dom';

class NavList extends React.Component {

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
        <a href='#'>Log Out</a>
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
