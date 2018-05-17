import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
  render() {
    return (
      <div>
        <form>
          <input type='text'
                 name='username'
                 placeholder='username' />
          <input type='password'
                 name='password'
                 placeholder='password' />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
};

export default SignUp;