import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavListContainer from './nav_list/nav_list_container';
import SessionFormContainer from './auth/session_form';
import UserFormContainer from './auth/user_form';
import RoomIndexContainer from './index/room_index_container';
import WelcomePage from './welcome_page';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div className="main">
    <NavListContainer />
    <Switch>
      <Route path='/explore' component={RoomIndexContainer} />
      <Route exact path='/' component={WelcomePage}/>
    </Switch>

    <SessionFormContainer />
    <UserFormContainer />
  </div>
);

export default App;
