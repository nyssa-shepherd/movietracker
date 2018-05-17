import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from '../Home/Home';
import SignUp from '../SignUp/SignUp';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  render() {
    let toLog;
    let log;

    if (!this.state.user) {
      toLog = '/signup'
      log = 'Sign Up/Log In'
    } else { 
      toLog = 'logout' 
      log = 'Log Out'
    }

    return (
      <div className='header'>
        <h1>Movie Tracker</h1>
        <div className='nav-links'>
          <NavLink to={toLog} className='nav'>{log}</NavLink>
        </div>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={SignUp} />
      </div>
      </div>
    );
  };
};

export default Header;

