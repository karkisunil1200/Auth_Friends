import React from 'react';
import {Route, Switch} from 'react-router-dom';

import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Route exact path='/' component={LoginForm} />
      <PrivateRoute path='/friendslist' component={FriendsList} />
      <AddFriendForm />
    </div>
  );
}

export default App;
