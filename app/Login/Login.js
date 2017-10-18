import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleLogin(){
    console.log('email', this.state.email);
  }

  handleChange(field, event){
    this.setState({
      [field]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <input
          type='email'
          value={this.state.email}
          onChange={() => this.handleChange('email')}
          placeholder='Email'
        />
        <input
          type='password'
          value={this.state.password}
          onChange={() => this.handleChange('password')}
          placeholder='Password'
        />
        <input type='submit' />
      </form>
    );
  }
}
