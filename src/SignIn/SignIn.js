import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { addUser } from '../redux/actions/index.js';
import './SignIn.css';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      redirect: false
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
    const { existingUsers, addUser } = this.props;
    const { username, password } = this.state;
    const matchingUser = existingUsers.find(user => user.username === username);
    matchingUser.password === password ? this.setState({ redirect: true }, () => {
      addUser(matchingUser);
      this.addUserToLocalStorage(matchingUser);
    }) : console.log('Imposter!');
  }

  addUserToLocalStorage = matchingUser => {
    localStorage.setItem('user', JSON.stringify(matchingUser));
  }

  render() {
    const { redirect } = this.state;
    let redirection = redirect ? <Redirect to='/home'/> : console.log('no');
    
    return (
      <div>
        { redirection }
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

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user))
});

export default withRouter(connect(null, mapDispatchToProps)(SignIn));