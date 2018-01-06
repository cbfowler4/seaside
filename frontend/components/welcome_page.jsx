import React from 'react';
import SearchBar from './nav_list/search_bar';

class WelcomePage extends React.Component {
  onWelcomePage () {
    return (this.props.location.pathname === '/');
  }

  //ComponentDidMount add a class to nav-bar to remove bottom border
  //ComponentDidUnmount remove class from nav-bar
  render() {
    return (
      <main className='welcome-page-main'>
        <content>
          <h1>Seaside</h1>
          <h2>Book unique ships</h2>
          <h2>and sail across the world.</h2>
          <SearchBar onWelcomePage={this.onWelcomePage()}/>
        </content>
      </main>
    );
  }
}

export default WelcomePage;
