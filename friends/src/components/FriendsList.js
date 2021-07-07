import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

import Friend from './Friend';
import './styles/FriendsList.css';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/api/friends')
      .then(response => {
        // console.log(response.data);
        setFriends(response.data);
      })
      .catch();
  }, [friends]);

  const deleteItem = id => {
    // console.log('This is the id:  ', id);
    // const newItem = friends.filter(friend => friend.id !== id);

    axiosWithAuth()
      .delete(`/api/friends/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch();
  };

  return (
    <div className='friends-list-container'>
      <h3 className='title'>Welcome to your friends list</h3>
      <div className='friends-list'>
        {friends.map(friend => {
          return <Friend key={friend.id} removeItem={deleteItem} friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default FriendsList;
