import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import './SignUp.css';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      usernameExistsMessage: null,
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });
  }

  checkIfUsernameExists = e => {
    e.preventDefault();
    const { username } = this.state;
    const { existingUsers } = this.props;
    const userExists = existingUsers.find( user => user.username === username ? user : null );
    document.getElementById('sign-up').reset();
    !userExists ? this.postUser() : this.usernameExistsMessage();
  }

  postUser = async() => {
    const { username, password } = this.state;
    const post = await fetch(`http://localhost:3000/api/v1/users`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    const user = await post.json();
  }

  usernameExistsMessage = () => {
    this.setState({ usernameExistsMessage: 'Error username already exists' });
  }

  render() {
    const { usernameExistsMessage } = this.state;
    const errorMessage = usernameExistsMessage ? <h5 className='error-message'>{usernameExistsMessage}</h5> : null;
   
    return (
      <div>
        <form id='sign-up'
            onSubmit={ e => this.checkIfUsernameExists(e) }>
        <h3 className='signup-text'>Sign Up</h3>
        {errorMessage}
        <input type='text'
              name='username'
              placeholder='Username'
              onChange={ e => this.handleInputChange(e) } />
        <input type='password'
              name='password'
              placeholder='Password' 
              onChange={ e => this.handleInputChange(e) } />
        <input type='password'
              name='password'
              placeholder='Confirm Password' 
              onChange={ e => this.handleInputChange(e) } />
        <button disabled={!this.state.username || !this.state.password}>Sign Up</button>
        </form>
      </div>
    );
  }
};

export default SignUp;