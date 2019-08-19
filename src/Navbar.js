import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Navbar() {
    const navStyle = {
        color:'white'
    };
    return (
    <nav>
        <h3>Logo</h3>
        <ul className='nav-links'>
            <Link style={navStyle} to="/Shop">
                <li>Shop</li>
            </Link>
            <Link style={navStyle} to="/About">
                <li>About</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Navbar;
