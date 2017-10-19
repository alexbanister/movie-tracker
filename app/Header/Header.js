import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutAction } from './HeaderAction.js';

const Header = (props)=>{
  return (
    <header>
      <div className='auth-links'>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </div>
      <h1>Movie<strong>Tracker</strong></h1>
      <NavLink to='/' className='main-nav'>Home</NavLink>
      <NavLink to='/favorites' className='main-nav'>Favorites</NavLink>
      <NavLink to='/' onClick={props.logOutAction}>Log Out</NavLink>
    </header>
  );
};

const mapStateToProps = (store) => ({
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  logOutAction: () => {
    dispatch(logOutAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
