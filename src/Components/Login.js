
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../assets/css/login.css';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const { username, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const validUsername = 'smoothgulp';
    const validPassword = 'smoothgulp';
      
    if (username === validUsername && password === validPassword) {
      localStorage.setItem('username', username);
      // Don't store the password in localStorage for security reasons
      toast.success('🍹 Welcome back! Your refreshing experience awaits!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate('/');
      window.dispatchEvent(new Event('storage')); // Trigger storage event
    } else {
      toast.error('🚫 Oops! It seems we couldn\'t quench your thirst. Please try again.', {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-item">
          <div className="logo">Sign in</div>

          <form action="" method="post" className="form form-login" onSubmit={(e) => onSubmit(e)}>
            <div className="form-field">
              <label className="user" htmlFor="login-username">
                <span className="hidden">Username</span>
              </label>
              <input
                id="login-username"
                type="text"
                className="form-input"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
                
              />
            </div>

            <div className="form-field">
              <label className="lock" htmlFor="login-password">
                <span className="hidden">Password</span>
              </label>
              <input id="login-password" type="password"  className="form-input"
                placeholder="Password"
                name="password"
                value={password} 
                onChange={onInputChange}
                
              />
            </div>

            <div className="form-field">
              <p className='login-text'>Forgot password ?</p>
            </div>

            <div className="form-field">
              <input type="submit" value="Log in" />
            </div>
          </form>

          <div className="links">
            <p className='login-text'>
              Don't have an account? <Link to="/Sign_up"> Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

