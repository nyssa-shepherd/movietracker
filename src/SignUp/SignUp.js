import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      existingUsers: null,
      usernameExistsMessage: null
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

  render() {
    const { usernameExistsMessage } = this.state;
    const errorMessage = usernameExistsMessage ? <h5>{usernameExistsMessage}</h5> : null;

    return (
      <div>
        <form id='sign-up'
              onSubmit={ e => this.checkIfUsernameExists(e) }>
          {errorMessage}
          <input type='text'
                 name='username'
                 placeholder='username'
                 onChange={ e => this.handleInputChange(e) } />
          <input type='password'
                 name='password'
                 placeholder='password' 
                 onChange={ e => this.handleInputChange(e) } />
          <button disabled={!this.state.username || !this.state.password}>Sign Up</button>
        </form>
      </div>
    );
  }
};

export default SignUp;