
import React, { useState } from 'react';
import '../assets/css/login.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

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

    try {
      const response = await axios.get('http://localhost:8080/users');

      const foundUser = response.data.find(
        (userData) => userData.username === user.username && userData.password === user.password
      );

      if (foundUser) {
        localStorage.setItem('username', user.username);
        localStorage.setItem('password', user.password);
        navigate('/home');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
      <div className="logincontainer">
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

