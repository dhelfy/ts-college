import React, { FC } from 'react';
import '../styles.css';
import { NavLink } from 'react-router-dom';

export const Navbar: FC = () => {
  return (
    <div className='navbar'>
        <NavLink to='/books' className="navbar_item">Books</NavLink>
        <NavLink to='/users' className="navbar_item">Users</NavLink>
        <NavLink to='/todos' className="navbar_item">Todo's</NavLink>
    </div>
  )
};