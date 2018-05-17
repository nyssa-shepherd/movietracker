import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
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
        <form onSubmit={ e => this.postUser(e) }>
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