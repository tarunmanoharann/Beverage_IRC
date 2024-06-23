import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "../assets/css/nav.css";

function Nav() {
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('favoriteItems');
    window.location.reload();
  };

  return (
    <nav className="nav-area">
      <ul className="nav-links">
        <li className="center">
          <Link to="/">
            <b>SmoothGulp</b>
          </Link>
        </li>
        <li className="logo">
          <Link to="/favorites">
            <FavoriteBorderIcon/>
          </Link>
        </li>
        <li className="logo">
          <Link to="/cart">
            <ShoppingCartOutlinedIcon/>
          </Link>
        </li>
        <li className="logo">
          {username ? (
            <div className="profile-container">
              <AccountCircleIcon className="profile-icon logged-in" />
              <div className="profile-dropdown">
                <span>{username}</span>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <AccountCircleIcon className="profile-icon" />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;