import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavListContainer from './nav_list/nav_list_container';
import SessionFormContainer from './auth/session_form';
import UserFormContainer from './auth/user_form';
import RoomIndexContainer from './index/room_index_container';
import RoomShowContainer from './room_show/room_show_container';
import UserShowContainer from './user_show/user_show_container';
import WelcomePage from './welcome_page';

import {AuthRoute} from '../util/route_util';

const App = () => (
  <div className="main">
    <NavListContainer />
    <Switch>
      <Route path='/explore' component={RoomIndexContainer} />
      <Route path='/rooms/:roomId' component={RoomShowContainer}/>
      <Route path='/users/:userId' component={UserShowContainer}/>
      <Route exact path='/' component={WelcomePage}/>
    </Switch>

    <SessionFormContainer />
    <UserFormContainer />
  </div>
);

export default App;
