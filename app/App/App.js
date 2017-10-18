import React, { Component } from 'react';
import CardCatelog from '../CardCatelog/CardCatelog';

import { Header } from '../Header/Header';
import { Route } from 'react-router-dom';
import { Login } from '../Login/login';
import { SignUp } from '../SignUp/SignUp';


export default class App extends Component {

  render() {
    return ([
      <Route path='/' component={Header} key='header'/>,
      <Route exact path='/' component={CardCatelog} key='CardCatelog'/>,
      <Route exact path='/login' component={Login} key='login' />,
      <Route exact path='/signup' component={SignUp} key='signup' />

    ]);
  }
}
