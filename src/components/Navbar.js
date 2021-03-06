import React from 'react';
import PropTypes from 'prop-types';
import { BsFillMicFill, BsFillGearFill } from 'react-icons/bs';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const Navbar = ({ title }) => (
  <nav className="navbar d-flex mx-2">
    <a href="/" className="text-decoration-none link-light">
      <MdOutlineArrowBackIosNew />
      2021
    </a>
    <span className="text-light title-f">{title}</span>
    <span className="text-light">
      <BsFillMicFill className="mx-3" />
      <BsFillGearFill className="me-1" />
    </span>
  </nav>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
