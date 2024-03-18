import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import LoginPage from './LoginPage';
import HomePage from './HomePage'; // Make sure this import matches your file structure

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* HomePage at the root path */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        {/* You can add more routes here as needed */}
      </Routes>
    </Router>
  </React.StrictMode>
);
