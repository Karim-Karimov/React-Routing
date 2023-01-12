import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <h3>About</h3>
      <Link to="/">
        HOME
      </Link>
      <Link to="/portfolio">
        PORTFOLIO
      </Link>
      <Link to="/contact">
        CONTACT
      </Link>
    </>
  )
}
