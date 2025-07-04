import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Forgotpass() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle password reset can be added here
    alert(`Password reset link sent to ${email}`);
    navigate('/New-pass'); // Redirect to New-pass page after submission
  };

  return (
    <div className="container">
      <div className="form-box">

        <h2>Reset your Password</h2>

        <p className='message'>
          Enter your user account's verified email address and we will send you a password reset link.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="reset-btn">
            <button type="submit" className='link-btn'>
              Send Reset Link
            </button>
          </div>
        </form>
        <p className="plain-btn">
           <a href="/login">&larr; back</a>
        </p>
      </div>
    </div>
  );
}

export default Forgotpass;