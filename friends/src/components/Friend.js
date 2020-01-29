import React from 'react';

import './styles/Friend.css';

const Friend = ({friend}) => {
  return (
    <div className='friend-container'>
      <div className='friend'>
        <h3>Name: {friend.name}</h3>
        <h3>Email: {friend.email}</h3>
      </div>
    </div>
  );
};

export default Friend;
