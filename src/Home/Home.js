import React, { Component } from 'react';
import Cards from '../redux/containers/Cards/Cards';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Cards />
      </div>
    );
  }
};

export default Home;