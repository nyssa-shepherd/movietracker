import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
  render() {
    return (
      <div>
        <form id='sign-in'
            onSubmit={ e => this.getUser(e) }>
        <h3 className='signin-text'>Sign In</h3>
        {/* {errorMessage} */}
        <input type='text'
              name='Username'
              placeholder='username'
              onChange={ e => this.handleInputChange(e) } />
        <input type='password'
              name='password'
              placeholder='Password' 
              onChange={ e => this.handleInputChange(e) } />
        <button disabled={!this.state.username || !this.state.password}>Sign In</button>
      </form>
      </div>
    );
  }
};

export default SignIn;