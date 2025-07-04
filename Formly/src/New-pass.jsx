import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function NewPass() {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="form-box">
                <h2>Create New Password</h2>

                <p className='message'>
                    Enter your new password below.
                </p>

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

                <div className="reset-btn">
                    <button className='link-btn' onClick={() => navigate('/login')}>
                        Confirm Password
                    </button>
                </div>

                <p className="plain-btn">
                    <a href="/Forgotpass">&larr; back</a>
                </p>
            </div>
        </div>
    )
}

export default NewPass;