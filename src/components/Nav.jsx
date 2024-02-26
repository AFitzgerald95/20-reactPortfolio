import React from 'react';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/about">About Me</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
