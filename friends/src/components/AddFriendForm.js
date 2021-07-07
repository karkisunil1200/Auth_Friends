import React, {useState} from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth';

const AddFriendForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    id: Date.now()
  });

  const onChangeHandler = event => {
    // console.log([event.target.name], event.target.value);
    setState({...state, [event.target.name]: event.target.value});
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('/api/friends', state)
      .then(response => {
        console.log(response);
      })
      .catch();
  };

  return (
    <div>
      <h4>Make a new Friend</h4>
      <div className='login-form'>
        <form onSubmit={onSubmitHandler}>
          <div className='login-input'>
            <label>Name</label>
            <input type='text' name='name' value={state.name} onChange={onChangeHandler} />
          </div>
          <div className='login-input'>
            <label>email</label>
            <input type='email' name='email' value={state.email} onChange={onChangeHandler} />
          </div>

          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddFriendForm;
