import React, { Component } from 'react';
import { userSignUp } from '../API/User';

class SignUp extends Component {
  constructor() {
    console.log(userSignUp);
    super();
    this.state ={
      name: '',
      email: '',
      password: ''
    };
  }

  async handleSignUp(event){
    event.preventDefault();
    const userData = await userSignUp(this.state.email, this.state.password, this.state.name);
    if (userData) {
      console.log(userData);
    } else {
      this.setState({
        loginError: true
      });
    }
  }

  handleChange(field, event){
    this.setState({
      [field]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSignUp(event)}>
        <input
          type='text'
          placeholder='Name'
          onChange={(event) => this.handleChange('name', event)}
        />
        <input
          type='email'
          placeholder='Email'
          onChange={(event) => this.handleChange('email', event)}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(event) => this.handleChange('password', event)}
        />
        <input type='submit' />
      </form>
    );
  }
}

module.exports = {
  SignUp
};
