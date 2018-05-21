import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      upOrIn: 'Sign Up',
      existingUsers: null
    }
  }

  componentDidMount = async() => {
    await this.getUsers();
  }

  getUsers = async e => {
    const initalFetch = await fetch(`http://localhost:3000/api/v1/users`);
    const existingUsers = await initalFetch.json();
    this.setState({ existingUsers });
  }

  toggleUpOrIn = () => {
    const { upOrIn } = this.state;
    upOrIn === 'Sign In' ? this.setState({upOrIn: 'Sign Up'}) : this.setState({upOrIn: 'Sign In'});
  }

  render() {
    const { upOrIn, existingUsers } = this.state;
    const correctForm = upOrIn === 'Sign Up' ? <SignUp existingUsers={existingUsers}/> : <SignIn existingUsers={existingUsers}/>;
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