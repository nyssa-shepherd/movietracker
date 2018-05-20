import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      upOrIn: 'Sign Up'
    }
  }

  toggleUpOrIn = () => {
    const { upOrIn } = this.state;
    upOrIn === 'Sign In' ? this.setState({upOrIn: 'Sign Up'}) : this.setState({upOrIn: 'Sign In'});
  }

  render() {
    const { upOrIn } = this.state;
    const correctForm = upOrIn === 'Sign Up' ? <SignUp/> : <SignIn/>;
    const buttonLabel = upOrIn === 'Sign Up' ? 'Sign In' : 'Sign Up';

    return (
      <div>
        {correctForm}
        <button onClick={ () => this.toggleUpOrIn() }>{buttonLabel}</button>
      </div>
    );
  }
};

export default Form;