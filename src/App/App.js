import React, { Component } from 'react';
import { fetchMovies } from '../api/apiCalls';
import { connect } from 'react-redux';
import { fetchApiMovies } from '../redux/actions/index.js';

class App extends Component {

  async componentDidMount() {
    const { fetchApiMovies } = this.props;
    await fetchApiMovies();  
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  fetchApiMovies: () => dispatch(fetchApiMovies())
});

export default connect(null, mapDispatchToProps)(App);
