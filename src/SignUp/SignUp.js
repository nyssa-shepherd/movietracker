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
      existingUsers: null,
      usernameExistsMessage: null,
      upOrIn: 'Sign Up'
    }
  }

  componentDidMount = () => {
    this.getUsers();
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });
  }

  getUsers = async e => {
    const initalFetch = await fetch(`http://localhost:3000/api/v1/users`);
    const existingUsers = await initalFetch.json();
    this.setState({ existingUsers });
  }

  checkIfUsernameExists = e => {
    e.preventDefault();
    const { existingUsers, username } = this.state;
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

  toggleUpOrIn = () => {
    const { upOrIn } = this.state;
    upOrIn === 'Sign In' ? this.setState({upOrIn: 'Sign Up'}) : this.setState({upOrIn: 'Sign In'});
  }

  render() {
    const { usernameExistsMessage, upOrIn } = this.state;
    const errorMessage = usernameExistsMessage ? <h5>{usernameExistsMessage}</h5> : null;
    const signup = (        
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
      <button onClick={() => this.toggleUpOrIn()}>Sign In</button>
      </form>
    );

    const signin = (
      <form id='sign-up'
            onSubmit={ e => this.getUser(e) }>
        <h3 className='signup-text'>Sign In</h3>
        {errorMessage}
        <input type='text'
              name='Username'
              placeholder='username'
              onChange={ e => this.handleInputChange(e) } />
        <input type='password'
              name='password'
              placeholder='Password' 
              onChange={ e => this.handleInputChange(e) } />
        <button disabled={!this.state.username || !this.state.password}>Sign In</button>
        <button onClick={() => this.toggleUpOrIn()}>Sign Up</button>
      </form>
    );

    const correctForm = upOrIn === 'Sign Up' ? signup : signin;

    return (
      <div>
        {correctForm}
      </div>
    );
  }
};

export default SignUp;