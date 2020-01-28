import React, {useState} from 'react';

const LoginForm = () => {
  const [state, setState] = useState({
    name: '',
    age: '',
    email: ''
  });

  const onChangeHandler = event => {
    console.log([event.target.name], event.target.value);
    setState({...state, [event.target.name]: event.target.value});
  };

  return (
    <div>
      <h2>Login Form</h2>
      <div className='login-form'>
        <form>
          <div className='login-input'>
            <label>Name</label>
            <input type='text' name='name' value={state.name} onChange={onChangeHandler} />
          </div>
          <div className='login-input'>
            <label>Age</label>
            <input type='text' name='age' value={state.age} onChange={onChangeHandler} />
          </div>
          <div className='login-input'>
            <label>Name</label>
            <input type='text' name='email' value={state.email} onChange={onChangeHandler} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
