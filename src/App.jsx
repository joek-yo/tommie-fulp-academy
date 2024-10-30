// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'; // Updated import
import About from './pages/About.jsx'; // Updated import

const App = () => {
    return (
        <Router>
            <div>
                <h1>Tommie Fulp Adventist Academy & Junior High School</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
