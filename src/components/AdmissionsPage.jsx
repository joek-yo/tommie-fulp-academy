// components/AdmissionsPage.jsx

import React from 'react';
import './AdmissionsPage.css'; // Create this file for CSS styles

const AdmissionsPage = () => {
  return (
    <div className="admissions-page">
      <header className="admissions-header">
        <h1>Admissions</h1>
      </header>
      <section className="requirements">
        <h2>Admission Requirements</h2>
        <ul>
          <li>Completed application form.</li>
          <li>Copy of the latest report card.</li>
          <li>Two letters of recommendation.</li>
          <li>Birth certificate copy.</li>
        </ul>
      </section>
      <section className="download-form">
        <h2>Download Application Form</h2>
        <a href="/path-to-your-form.pdf" download>
          <button className="download-button">Download Application Form</button>
        </a>
      </section>
    </div>
  );
};

export default AdmissionsPage;
