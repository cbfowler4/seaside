import React from 'react';
import { Route, Link } from 'react-router-dom';
import NavListContainer from './nav_list/nav_list_container';
import SessionFormContainer from './auth/session_form';
import UserFormContainer from './auth/user_form';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div className="main">
    <h1>Seaside</h1>
    <Link className="icon-link" to='/'></Link>
    <NavListContainer />

    <AuthRoute path="/login" component={SessionFormContainer}/>
    <AuthRoute path="/signup" component={UserFormContainer}/>
  </div>
);

export default App;
