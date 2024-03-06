import React, { useState } from 'react';
import './SignUp.css'; // Make sure the path is correct based on where you place your CSS file

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Sign Up with:', email, password);
    // Here you will add the code to handle the sign-up logic
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>CREATE AN ACCOUNT</h2>
        <p>Create an account to access all the features for free!</p>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Create Account</button>
        <p>
          Already have an account? <a href="/signin">Sign in</a>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
