import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link data-testid='home-link' to='/'>
              home
            </Link>
          </li>
          <li>
            <Link data-testid='about-link' to='/about'>
              about
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
