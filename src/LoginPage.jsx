import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Login with:', username, password);
  };

  return (
    <div className="container">
      <div className="login-form">
        <img className="sjsu_logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/San_Jose_State_Spartans_logo.svg/1200px-San_Jose_State_Spartans_logo.svg.png" alt="SJSU Logo" />
        <h2>Welcome Back!</h2>
        <p>Discover a space where diverse talents merge seamlessly. Get started for free.</p>
        <form id="loginForm" onSubmit={handleLogin}>
          <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" id="submit">Login</button>
        </form>
        <p>Not a member? <Link to="/signup">Register Now</Link></p>
        <p><Link to="/">Home</Link></p>
      </div>
      <div className="welcome-back">
        <h1>Spartan Collab</h1>
        <p>Where Talents Merge, Projects Emerge.</p>
        <img className="login_logo" src="src/groupworkLogo.png" alt="Collab Logo" />
      </div>
    </div>
  );
}

export default LoginPage;
