import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  toggleUpOrIn = () => {
    const { upOrIn } = this.state;
    upOrIn === 'Sign In' ? this.setState({upOrIn: 'Sign Up'}) : this.setState({upOrIn: 'Sign In'});
  }

  render() {
    return (
      <div>

      </div>
    );
  }
};

export default Form;