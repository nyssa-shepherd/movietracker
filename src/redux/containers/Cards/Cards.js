import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cards.css';

class Cards extends Component {
  render() {
    const movies = this.props.movies.map(( movie, i ) => {
      let originalDate = movie.release_date.split('-');
      let cleanDate = [originalDate[1], originalDate[2], originalDate[0]];
      cleanDate = cleanDate.join('/');

      return (
        <div className='card' key={i}>
          <h3>{movie.title}</h3>
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

export default connect(mapStateToProps)(Cards);
