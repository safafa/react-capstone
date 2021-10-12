import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillMicFill, BsFillGearFill } from 'react-icons/bs';

const Navbar = () => (
  <nav className="navbar d-flex mx-2 bg-white">
    <a href="/">Covid stats</a>
    <NavLink to="/" exact>Countries</NavLink>
    <span>
      <BsFillMicFill />
      <BsFillGearFill />
    </span>
  </nav>
);

export default Navbar;
