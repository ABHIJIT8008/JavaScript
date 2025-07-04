import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import emo from './assets/emoji.png';
import { Link } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form-box">
        <div className="avatar">
          <img src={emo} alt="Emoji" className="emoji" />
        </div>
        <h2>Log in</h2>

        <input type="text" placeholder="Email or mobile phone number" className="input-field" />

        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Your password"
            className="input-field"
          />
          <span className="toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈 Hide' : '👁️ Show'}
          </span>
        </div>

        <button className="login-btn">Log in</button>

        <p className="agreement">
          By continuing, you agree to the <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>.
        </p>
      

        <div className='forgot-btn'>
          <Link to="/Forgotpass" className='plain-btn'>
          Forgot Password?  
          </Link>
        </div>

        <div className="divider">
          <hr />
          <span>New to our community?</span>
          <hr />
        </div>

        <button className="create-btn" onClick={() => navigate('/signup')}>
          Create an account
        </button>
      </div>
    </div>
  );
}

export default Login;
