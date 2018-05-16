import React, { Component } from 'react';
import { fetchMovies } from '../api/apiCalls';
import { connect } from 'react-redux';
import { addMovies, fetchApiMovies } from '../redux/actions/index.js';

class App extends Component {

  async componentDidMount() {
    const { fetchApiMovies, movies } = this.props;
    await fetchApiMovies(); 
    await console.log(movies) 
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
};

const mapStateToProps = store => ({
  movies: store.movies
});

const mapDispatchToProps = dispatch => ({
  fetchApiMovies: () => dispatch(fetchApiMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
