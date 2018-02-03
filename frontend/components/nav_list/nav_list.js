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
    return () => {
      const action = (modal === 'signup') ? this.props.openSignup : this.props.openLogin;
      action();
    };
  }

  onWelcomePage () {
    return (this.props.location.pathname === '/');
  }

  render() {
    const contactInfo = (
      <div id="contact-info">
        <ul>
          <li><a
            target='_blank'
            id='website-link' href='http://www.bryanfowler.io'>
            <i className="fa fa-home" aria-hidden="true"></i>
          </a></li>
          <li><a
            target='_blank'
            id='linkedin-link' href='https://www.linkedin.com/in/bryanfowlerme/'>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a></li>
          <li><a
            target='_blank'
            id='github-link' href='https://github.com/cbfowler4/seaside'>
            <i className="fa fa-github" aria-hidden="true"></i>
          </a></li>
        </ul>
      </div>
    );

    let userStatus;
    if (!this.props.currentUser) {
      userStatus = (
        <div className='nav-right'>
          <a onClick={this.handleClickAuth('signup')}>Sign Up</a>
          <a onClick={this.handleClickAuth('login')}>Log In</a>
          {contactInfo}
        </div>
      );
    } else {
      userStatus = (
        <div className='nav-right'>
          <img src={this.props.currentUser.imageAvatarUrl}/>
          <form onSubmit={this.handleLogout}>
            <button>Log Out</button>
          </form>
          {contactInfo}
        </div>
      );
    }


    return (
      <nav className='nav-bar-main'>
        <div className='nav-left'>
          <Link className="icon-link" to='/'></Link>
          {!this.onWelcomePage() &&
            <SearchBar onWelcomePage={this.onWelcomePage()}/>
          }
        </div>
        {userStatus}
      </nav>
    );
  }
}

export default NavList;
