import React, { Component } from 'react';
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
}

export default Favorites;