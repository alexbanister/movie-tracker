import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = ()=>{
  return (
    <header>
      <div className='auth-links'>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </div>
      <h1>Movie<strong>Tracker</strong></h1>
      <NavLink to='/' className='main-nav'>Home</NavLink>
      <NavLink to='/favorites' className='main-nav'>Favorites</NavLink>
    </header>
  );
};

module.exports = {
  Header
};
