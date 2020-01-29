import React from 'react';
import {Route, Switch} from 'react-router-dom';

import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Route exact path='/' component={LoginForm} />
      <PrivateRoute path='/friendslist' component={FriendsList} />
    </div>
  );
}

export default App;
