import React from 'react';
import SearchBar from './nav_list/search_bar';

class WelcomePage extends React.Component {
 render() {
   return (
     <main className='welcome-page-main'>
       <SearchBar />
     </main>
   );
  }
}

export default WelcomePage;
