import React from 'react';

import './styles/Friend.css';

const Friend = ({friend, removeItem}) => {
  const remove = id => {
    return removeItem(id);
  };

  return (
    <div className='friend-container'>
      <div className='friend'>
        <h3>Name: {friend.name}</h3>
        <h3>Email: {friend.email}</h3>
        <button className='delete' onClick={() => remove(friend.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Friend;
