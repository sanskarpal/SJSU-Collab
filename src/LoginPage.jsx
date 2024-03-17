import React, { useState } from 'react';
import './LoginPage.css'; // This will be your CSS file for the LoginPage

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Implement your login logic here
    console.log('Login with:', username, password);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/San_Jose_State_Spartans_logo.svg/1200px-San_Jose_State_Spartans_logo.svg.png"
          alt="SJSU Spartans Logo"
          className="login-logo"
        />
        <h1>Welcome Back!</h1>
        <p>Discover a space where diverse talents merge seamlessly. Get started for free.</p>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Not a member? <a href="/signup">Register Now</a>
        </p>
      </div>
      <div className="login-graphic">
        {/* Include your graphic here as an img tag or as a background in CSS */}
      </div>
    </div>
  );
}

export default LoginPage;
