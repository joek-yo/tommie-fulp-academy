// components/HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Create this file for CSS styles

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to Tommie Fulp Adventist Academy</h1>
        <p>Providing quality education with a focus on character development.</p>
        <Link to="/admissions" className="cta-button">Learn More About Admissions</Link>
      </header>
      <nav className="homepage-nav">
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/admissions">Admissions</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
