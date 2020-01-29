import React, {useState} from 'react';
import axios from 'axios';

const LoginForm = props => {
  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const onChangeHandler = event => {
    // console.log([event.target.name], event.target.value);
    setState({...state, [event.target.name]: event.target.value});
  };
  const onSubmitHandler = event => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/api/login', state)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/friendslist');
      })
      .catch(err => {
        console.log(err);
      });

    setState({
      username: '',
      password: ''
    });
    console.log('I have beeen submitted');
  };

  return (
    <div>
      <h2>Login Form</h2>
      <div className='login-form'>
        <form onSubmit={onSubmitHandler}>
          <div className='login-input'>
            <label>Name</label>
            <input type='text' name='username' value={state.uernaname} onChange={onChangeHandler} />
          </div>
          <div className='login-input'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              value={state.password}
              onChange={onChangeHandler}
            />
          </div>

          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
