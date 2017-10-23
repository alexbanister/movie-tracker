import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutAction } from './HeaderAction.js';
import PropTypes from 'prop-types';

const Header = (props)=>{
  const handleLogout = () => {
    localStorage.removeItem('movieTrackerUser');
    props.logOutAction();
  };

  return (
    <header>
      {
        !props.user.id &&
          <div className='auth-links'>
            <NavLink to='/login'>Log In</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
          </div>
      }
      {
        props.user.id &&
        <div className='auth-links'>
          <NavLink className='redux-click' to='/' onClick={handleLogout}>Log Out</NavLink>
        </div>
      }
      <h1>Movie<strong>Tracker</strong></h1>
      <NavLink to='/' className='main-nav'>Home</NavLink>
      <NavLink to='/favorites' className='main-nav'>Favorites</NavLink>
    </header>
  );
};

Header.propTypes = {
  logOutAction: PropTypes.func,
  user: PropTypes.object
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
