import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar d-flex bg-white">
    <a href="/">Covid stats</a>
    <NavLink to="/" exact>Countries</NavLink>
    <NavLink to="/details">Details</NavLink>
  </nav>
);

export default Navbar;
