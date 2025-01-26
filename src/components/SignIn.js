import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track if the form is submitted

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Sign In Successful');
        // Redirect the user to main page
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Sign-in error:', error);
      alert('An error occurred during sign-in. Please try again.');
    }
  };

  return (
    <div>
      {!isSubmitting ? (
        <>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
          </form>
        </>
      ) : (
        <p>Processing your sign-in request...</p>
      )}
    </div>
  );
}

export default SignIn;
