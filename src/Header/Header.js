import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Home from '../Home/Home';
import Form from '../Form/Form';
import Favorites from '../Favorites/Favorites';
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
    let welcomeUser;

    if (!this.props.user) {
      toLog = '/signup';
      log = 'Sign Up/Log In';
    } else { 
      toLog = 'logout'; 
      log = 'Log Out';
      welcomeUser = 'Welcome, ' + this.props.user.username;
    }

    return (
      <div className='header'>
        <div className='header-text'>
          <h1>Movie Tracker</h1>
          <div className='nav-links'>
            {welcomeUser}
            <NavLink to={toLog} className='nav'>{log}</NavLink>
            <NavLink to='/favorites' className='nav'>Favorites</NavLink>
          </div>
        </div>
        <div>
          <Route exact path='/home' component={Home} />
          <Route exact path='/signup' component={Form} />
          <Route exact path='/favorites' component={Home} />
      </div>
      </div>
    );
  };
};

const mapStateToProps = store => ({
  user: store.user
});

export default withRouter(connect(mapStateToProps)(Header));

