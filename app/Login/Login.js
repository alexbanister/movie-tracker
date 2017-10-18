import React, { Component } from 'react';
import { userLogin } from '../API/User';
import { connect } from 'react-redux';
import { LoginAction } from './LoginAction';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: 'tman2272@aol.com',
      password: 'password',
      disabled: true
    };
  }

  async handleLogin(event){
    event.preventDefault();
    const userData = await userLogin(this.state.email, this.state.password);
    this.props.loginAction(userData.data);
  }

  handleChange(field, event){
    this.setState({
      [field]: event.target.value,
      disabled: !this.state.email || !this.state.password
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
        <input type='submit' disabled={this.state.disabled} />
      </form>
    );
  }
}


const mapStateToProps =  (store) => ({
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: ( user ) => { dispatch(LoginAction(user)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
