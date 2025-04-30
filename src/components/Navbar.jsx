import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">KinoHub</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </nav>
  );
}
