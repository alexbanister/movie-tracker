import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ()=>{
  return (
    <header>
      <NavLink to='/' >Home</NavLink>
      <NavLink to='/favorites'>Favorites</NavLink>
      <NavLink to='/login'>Log In</NavLink>
    </header>
  );
};

export default Header;
