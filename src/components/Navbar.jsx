// Navbar.jsx - Navigation Bar Component

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/src/assets/logo.png" alt="Tommie Fulp Academy Logo" className="logo" />
        <h1>Tommie Fulp Adventist Academy</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/admissions">Admissions</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
