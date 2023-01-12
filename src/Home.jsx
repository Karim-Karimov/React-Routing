import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h3>Home Page</h3>
      <Link to="/about">
        ABOUT
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
