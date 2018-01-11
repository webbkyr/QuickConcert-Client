import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
  <header>
    <nav>
      <ul className='nav-list-section'>
      <li className='home-link'>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li className='about-link'>
          <Link to='/about'>
            About 
          </Link>
        </li>
        <li className='search-link'>
          <Link to='/search'>
            Search
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

