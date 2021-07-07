import React from 'react';
import {Route, Switch} from 'react-router-dom';

import AddFriendForm from './components/AddFriendForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from './utils/PrivateRoute';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Route exact path='/' component={LoginForm} />
      <PrivateRoute path='/friendslist' component={FriendsList} />
      <PrivateRoute path='/addfriend' component={AddFriendForm} />
    </div>
  );
}

export default App;
