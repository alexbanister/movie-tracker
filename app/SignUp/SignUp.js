import React, { Component } from 'react';
import { userSignUp } from '../API/User';

class SignUp extends Component {
  constructor() {
    super();
    this.state ={
      name: '',
      email: '',
      password: '',
      retypePassword: '',
      disabled: true,
      signUpError: false,

    };
  }

  async handleSignUp(event){
    event.preventDefault();
    const userData = await userSignUp(
      this.state.email,
      this.state.password,
      this.state.name
    );

    if (userData) {
      console.log(userData);
    } else {
      this.setState({
        sitnUpError: true
      });
    }
  }

  handleChange(field, event){
    this.setState({
      [field]: event.target.value,
      disabled: !this.state.email || !this.state.password || !this.state.name
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
        <input
          type='retypePassword'
          placeholder='Please Retype Password'
          onChange={(event) => this.handleChange('retypePassword', event)}
        />
        <input type='submit'
          disabled={this.state.disabled}/>
      </form>
    );
  }
}

module.exports = {
  SignUp
};
