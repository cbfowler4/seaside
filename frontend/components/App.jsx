import React from 'react';
import { Route } from 'react-router-dom';
import NavListContainer from './nav_list/nav_list_container';
import SessionFormContainer from './auth/session_form';
import UserFormContainer from './auth/user_form';

const App = () => (
  <div className="main">
    <h1>Seaside</h1>
    <NavListContainer />

    <Route path="/login" component={SessionFormContainer}/>
    <Route path="/signup" component={UserFormContainer}/>
  </div>
);

export default App;
