import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import "../assets/css/nav.css";

function Nav() {
  const [username, setUsername] = useState(localStorage.getItem('username') || null);
  const [cartCount, setCartCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);

useEffect(() => {
  const handleStorage = () => {
    setUsername(localStorage.getItem('username') || null);
    updateCounts();
  };

  window.addEventListener('storage', handleStorage);
  updateCounts();
  return () => window.removeEventListener('storage', handleStorage);
}, []);

const updateCounts = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
  setCartCount(cartItems.length);
  setFavoriteCount(favoriteItems.length);
};

const handleLogout = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('favoriteItems');
  setUsername(null);
  setCartCount(0);
  setFavoriteCount(0);
  window.location.reload();
};

  return (
    <nav className="nav-area">
      <ul className="nav-links">
        <li className="center">
          <Link to="/">
          <span className="smoothgulp-title">
           Smooth<span className="gulp">G<span className="drop"></span>ulp</span>
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
          </span>
          </Link>
        </li>
        <li className="logo">
          <Link to="/favorites">
           <Badge badgeContent={favoriteCount} color="secondary">
              <FavoriteBorderIcon />
            </Badge>
          </Link>
        </li>
        <li className="logo">
          <Link to="/cart">
          <Badge badgeContent={cartCount} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Link>
        </li>
        <li className="logo">
        {username ? (
         <div className="profile-container">
           <AccountCircleIcon className="profile-icon logged-in" style={{color: '#4CAF50'}} />
           <div className="profile-dropdown">
            <span>{username}</span>
            <button onClick={handleLogout}>Logout</button>
         </div>
        </div>
        ) : (
        <Link to="/login">
        <AccountCircleIcon className="profile-icon" style={{color: '#888'}} />
        </Link>
         )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;