import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      existingUsers: null
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

  checkIfUsernameExists = () => {
    const { existingUsers, username } = this.state;
    const userExists = existingUsers.find( user => user.username === username ? user : null );
    !userExists ? this.postUser() : this.usernameExistsMessage();
  }

  postUser = async e => {
    e.preventDefault();
    const { username, password } = this.state;
    const post = await fetch(`http://localhost:3000/api/v1/users`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    const user = await post.json();
  }

  render() {
    return (
      <div>
        <form onSubmit={ e => this.checkIfUsernameExists(e) }>
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