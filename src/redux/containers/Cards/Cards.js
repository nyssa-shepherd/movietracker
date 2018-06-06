import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { addMovies, addFavorite } from '../../actions/index.js';
import './Cards.css';

class Cards extends Component {
  checkForUser = e => {
    const { user } = this.props;
    const { id } = e.target.parentNode;
    user ? this.favoriteMovie(id) : console.log('no');
  }

  favoriteMovie = id => {
    const { movies, addMovies, addFavorite } = this.props;
    let match = movies.find( movie => movie.id === parseInt(id) ? movie : null);
    match.favorite = !match.favorite;
    addMovies(movies);
    addFavorite(match);
  }

  render() {
    const { location, favorites, movies } = this.props;
    const cardData = location.pathname === '/home' ? movies : favorites;

    const movieData = cardData.map(( movie, i ) => {
      let originalDate = movie.date.split('-');
      let cleanDate = [originalDate[1], originalDate[2], originalDate[0]];
      cleanDate = cleanDate.join('/');

      return (
        <div className='card' key={i} id={movie.id}>
          <h3>{movie.title}</h3>
          <button onClick={ (e) => this.checkForUser(e) }>Favorite</button>
          <h5>{cleanDate}</h5>
          <p>{movie.overview}</p>
        </div>
      );
    });
    
    return (
      <div className='card-container'>
        {movieData}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cards));
