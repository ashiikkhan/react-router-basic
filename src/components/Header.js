import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <NavLink
        to='/home'
        className={({ isActive }) => (isActive ? 'activeLink' : undefined)}>
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'activeLink' : undefined)}>
        About
      </NavLink>
      <NavLink
        to='/friends'
        className={({ isActive }) => (isActive ? 'activeLink' : undefined)}>
        Friends
      </NavLink>
      <NavLink
        to='/posts'
        className={({ isActive }) => (isActive ? 'activeLink' : undefined)}>
        Posts
      </NavLink>
    </div>
  );
};

export default Header;
