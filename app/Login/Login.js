import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleLogin(event){
    event.preventDefault();
    console.log('email', this.state.email);
  }

  handleChange(field, event){
    this.setState({
      [field]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleLogin(event)}>
        <input
          type='email'
          value={this.state.email}
          onChange={(event) => this.handleChange('email', event)}
          placeholder='Email'
        />
        <input
          type='password'
          value={this.state.password}
          onChange={(event) => this.handleChange('password', event)}
          placeholder='Password'
        />
        <input type='submit' />
      </form>
    );
  }
}
