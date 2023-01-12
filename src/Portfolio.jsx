import React from 'react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
    return (
        <>
            <h3>Portfolio</h3>
            <Link to="/">
                HOME
            </Link>
            <Link to="/about">
                ABOUT
            </Link>
            <Link to="/contact">
                CONTACT
            </Link>
        </>
    )
}
