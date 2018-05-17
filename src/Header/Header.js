import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  render() {
    let log;
    !this.state.user ? log = 'login' : log = 'logout';

    return (
      <div className='header'>
        <h1>Movie Tracker</h1>
        <div className='nav-links'>
          <NavLink to={log}>{log}</NavLink>
        </div>
      </div>
    );
  };
};

export default Header;

