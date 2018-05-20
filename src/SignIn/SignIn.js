import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });
  }

  getUser = e => {
    e.preventDefault();
    const { existingUsers } = this.props;
    const { username, password } = this.state;
    const matchingUser = existingUsers.find(user => user.username === username);
    console.log(matchingUser);
  }

  render() {
    return (
      <div>
        <form id='sign-in'
            onSubmit={ e => this.getUser(e) }>
        <h3 className='signin-text'>Sign In</h3>
        {/* {errorMessage} */}
        <input type='text'
              name='username'
              placeholder='Username'
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