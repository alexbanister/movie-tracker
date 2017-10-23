import React, { Component } from 'react';
import { userSignUp, userLogin } from '../API/User';
import { LoginAction } from '../Login/LoginAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      retypePassword: '',
      signUpError: false,
      disabled: true,
      passwordValidationError: false
    };
  }

  async handleSignUp(event){
    event.preventDefault();
    this.logInNewUser( await this.createUser());
  }

  async createUser(){
    if (this.state.password === this.state.retypePassword){
      const newUserData = await userSignUp(
        this.state.email,
        this.state.password,
        this.state.name
      );
      return newUserData;
    } else {
      this.setState({
        passwordValidationError: true
      });
    }
  }

  async logInNewUser(newUserData) {
    if (newUserData.status === 'success') {
      const userData = await userLogin(this.state.email, this.state.password);
      this.props.loginAction(userData.data);
    } else {
      this.setState({
        signUpError: true
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
        {
          this.state.passwordValidationError &&
          <h2>Passwords do not match.</h2>
        }
        {
          this.state.signUpError &&
          <h2>Email Already Exists</h2>
        }
        {
          this.props.user.id &&
          <Redirect to="/" />
        }
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
          type='password'
          placeholder='Please Retype Password'
          onChange={(event) => this.handleChange('retypePassword', event)}
        />
        <button type='submit'
          disabled={this.state.disabled}>
            Sign Up
        </button>
      </form>
    );
  }
}

SignUp.propTypes ={
  loginAction: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps =  (store) => ({
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: ( user ) => { dispatch(LoginAction(user)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
