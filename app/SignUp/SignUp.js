import React, { Component } from 'react';
import { userSignUp, userLogin } from '../API/User';
import { LoginAction } from '../Login/LoginAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  constructor() {
    super();
    this.state ={
      name: '',
      email: '',
      password: '',
      retypePassword: '',
      disabled: true,
      signUpError: false
    };
  }

  async handleSignUp(event){

    event.preventDefault();
    const newUserData = await userSignUp(
      this.state.email,
      this.state.password,
      this.state.name
    );

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
          this.state.singUpError &&
          <h2>You Failed</h2>
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
        <input type='submit'
          disabled={this.state.disabled}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
