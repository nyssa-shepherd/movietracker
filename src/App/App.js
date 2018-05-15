import React, { Component } from 'react';
import { fetchMovieApi } from './api/apiCalls';

class App extends Component {

  componentDidMount() {
    fetchMovieApi();
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
