import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './SignUp.css'; // Make sure the path is correct based on where you place your CSS file
import axios from 'axios';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Sign Up with:', email, password);
    try {
      const response = await axios.post('http://localhost:8081/api/users/signup', {
        email: email,
        password: password
      });

      // Handle response here. For example:
      console.log(response.data);
      alert('Account created successfully');

      // Redirect user to another page or clear form, etc.
      // setEmail('');
      // setPassword('');

    } catch (error) {
      // Handle error here. For example:
      console.error('There was an error!', error);
      alert('Failed to create account');
    }
  };

  return (
    <div className="signup-page">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/San_Jose_State_Spartans_logo.svg/1200px-San_Jose_State_Spartans_logo.svg.png"
        alt="San Jose State Spartans Logo"
        className="signup-logo"
      />
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
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;