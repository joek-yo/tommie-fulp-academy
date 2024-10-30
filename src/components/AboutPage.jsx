// components/AboutPage.jsx

import React from 'react';
import './AboutPage.css'; // Create this file for CSS styles

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Tommie Fulp Adventist Academy</h1>
      </header>
      <section className="mission-vision">
        <h2>Mission</h2>
        <p>
          Our mission is to provide a holistic education that fosters intellectual, spiritual, and social development.
        </p>
        <h2>Vision</h2>
        <p>
          We envision a community of learners committed to excellence, integrity, and service.
        </p>
      </section>
      <section className="team">
        <h2>Meet Our Team</h2>
        <p>
          Our dedicated team of educators is passionate about nurturing the next generation of leaders.
        </p>
        {/* You can add more team member profiles here */}
      </section>
    </div>
  );
};

export default AboutPage;
