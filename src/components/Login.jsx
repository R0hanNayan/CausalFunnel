import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  // State variables for email input and error message
  const [email, setEmail] = useState(''); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); 

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Validate the email: must not be empty and must follow a valid email format
    if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.'); // Set an error message if validation fails
      return; 
    }
    setError(''); 
    localStorage.setItem('userEmail', email); // Store the email in local storage for later use
    navigate('/quiz'); // Navigate to the quiz page upon successful login
  };

  return (
    <div className="login-container"> 
      <h1>Login to Start</h1> 
      <form onSubmit={handleSubmit}> {/* Form element with submit handler */}
        <label htmlFor="email">Email Address:</label> 
        <input
          type="email" 
          id="email"
          value={email} // Bind input value to the email state
          onChange={(e) => setEmail(e.target.value)} // Update email state on input change
          placeholder="Enter your email" 
        />
        {/* Display error message if validation fails */}
        {error && <p className="error">{error}</p>} 
        <button type="submit">Start Quiz</button> {/* Submit button to start the quiz */}
      </form>
    </div>
  );
};

export default Login; 
