import React, { Component } from 'react';
import { fetchMovies } from '../api/apiCalls';
import { connect } from 'react-redux';
import { fetchApiMovies, addUser } from '../redux/actions/index.js';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import SignUp from '../SignUp/SignUp';

class App extends Component {

  async componentDidMount() {
    const { fetchApiMovies } = this.props;
    await fetchApiMovies();  
    this.getUser();
  }

  getUser = () => {
    const { addUser } = this.props;
    let user = JSON.parse(localStorage.getItem('user'));

    user? addUser(user) : console.log('no');
  }

  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  fetchApiMovies: () => dispatch(fetchApiMovies()),
  addUser: user => dispatch(addUser(user))
});

export default withRouter(connect(null, mapDispatchToProps)(App));
