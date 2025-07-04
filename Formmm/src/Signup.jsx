import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import emo from './assets/emoji.png';


function App() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form-box">
        <div className="avatar">
          <img src={emo} alt="Emoji" className="emoji" />
        </div>
        <h2>Sign up</h2>

        <input type="text" placeholder="Email or mobile phone number" className="input-field" />

        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Your password"
            className="input-field"
          />
          <span className="toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈 Hide': '👁️ Show'} 
          </span>
        </div>

        <button className="signin-btn">Sign in</button>

        <p className="agreement">
          By continuing, you agree to the <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>.
        </p>


        <div className="divider">
          <hr />
          <span>Already have an account?</span>
          <hr />
        </div>

        <button className="create-btn" onClick={() => navigate('/login')}>
          Log in
        </button>

      
        <button className="create-btn" onClick={() => navigate('/login')}>
          <span className='social-span'>
            <span className='google-img'></span>
            <span className='gicon-msg'>Continue with Google</span>
          </span>
        </button>

      </div>
    </div>
  );
}

export default App;
