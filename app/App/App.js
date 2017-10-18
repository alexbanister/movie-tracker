import React, { Component } from 'react';
import CardCatelog from '../CardCatelog/CardCatelog';
import Header from '../Header/Header'
import { Route } from 'react-router-dom'

export default class App extends Component {

  render() {
    return ([
      <Route path='/' component={Header} key='header'/>,
      <Route exact path='/' component={CardCatelog} key='CardCatelog'/>
    ]);
  }
}
