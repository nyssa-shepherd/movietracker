import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovies } from '../../actions/index.js';
import './Cards.css';

class Cards extends Component {
  favoriteMovie = e => {
    const { id } = e.target.parentNode;
    const { movies, addMovies } = this.props;
    let match = movies.find( movie => movie.id === parseInt(id) ? movie : null);
    match.favorite = !match.favorite;
    addMovies(movies);
  }

  render() {
    const movies = this.props.movies.map(( movie, i ) => {
      let originalDate = movie.date.split('-');
      let cleanDate = [originalDate[1], originalDate[2], originalDate[0]];
      cleanDate = cleanDate.join('/');

      return (
        <div className='card' key={i} id={movie.id}>
          <h3>{movie.title}</h3>
          <button onClick={ (e) => this.favoriteMovie(e) }>Favorite</button>
          <h5>{cleanDate}</h5>
          <p>{movie.overview}</p>
        </div>
      );
    });
    
    return (
      <div className='card-container'>
        {movies}
      </div>
    );
  }
};

const mapStateToProps = store => ({
  movies: store.movies
});

const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
