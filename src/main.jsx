import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import LoginPage from './LoginPage'; // Make sure to create this component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} /> {/* Root path now points to SignUp */}
        <Route path="/signup" element={<SignUp />} /> {/* Redundant but you can keep it if you want */}
        <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </React.StrictMode>
);
