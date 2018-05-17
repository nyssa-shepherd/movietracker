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

  postUser = () => {

  }

  render() {
    return (
      <div>
        <form onSubmit={ () => this.postUser() }>
          <input type='text'
                 name='username'
                 placeholder='username'
                 onChange={ e => this.handleInputChange(e) } />
          <input type='password'
                 name='password'
                 placeholder='password' 
                 onChange={ e => this.handleInputChange(e) } />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
};

export default SignUp;