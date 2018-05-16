import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cards extends Component {
  render() {
    const movies = this.props.movies.map( movie => {
      return (
        <div className='card'>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      );
    });
    
    return (
      <div>
        {movies}
      </div>
    );
  }
};

const mapStateToProps = store => ({
  movies: store.movies
});

export default connect(mapStateToProps)(Cards);
