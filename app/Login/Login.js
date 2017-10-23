import React, { Component } from 'react';
import { userLogin } from '../API/User';
import { connect } from 'react-redux';
import { LoginAction } from './LoginAction';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
      loginError: false
    };
  }

  async handleLogin(event){
    event.preventDefault();
    const userData = await userLogin(this.state.email, this.state.password);
    if (userData.data) {
      localStorage.setItem('movieTrackerUser', JSON.stringify(userData.data));
      this.props.loginAction(userData.data);
    } else {
      this.setState({
        loginError: true
      });
    }
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
        {
          this.state.loginError &&
          <h2>Email and Password Do Not Match</h2>
        }
        {
          this.props.user.id &&
          <Redirect to="/" />
        }
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

Login.propTypes = {
  loginAction: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps =  (store) => ({
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: ( user ) => { dispatch(LoginAction(user)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
