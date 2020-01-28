import React, {useState, useEffect} from 'react';
import axios from 'axios';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000')
      .then(response => {
        console.log(response);
      })
      .catch();
  }, []);

  return (
    <div>
      <h3>Welcome to your friends list</h3>
    </div>
  );
};

export default FriendsList;
