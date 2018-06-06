import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovies, addFavorite } from '../redux/actions/index.js';
import Cards from '../redux/containers/Cards/Cards';

class Favorites extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <Cards />
      </div>
    );
  }
};

const mapStateToProps = store => ({
  movies: store.movies,
  user: store.user,
  favorites: store.favorites
});

const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies)),
  addFavorite: favoriteMovie => dispatch(addFavorite(favoriteMovie))
});


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);