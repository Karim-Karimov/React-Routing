import React from 'react'
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <h3>Contact</h3>
      <Link to="/">
        HOME
      </Link>
      <Link to="/about">
        ABOUT
      </Link>
      <Link to="/portfolio">
        PORTFOLIO
      </Link>
    </>
  )
}
