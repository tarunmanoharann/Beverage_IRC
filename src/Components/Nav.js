import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "../assets/css/nav.css";

function Nav() {
  const [username, setUsername] = useState(localStorage.getItem('username') || null);

useEffect(() => {
  const handleStorage = () => {
    setUsername(localStorage.getItem('username') || null);
  };

  window.addEventListener('storage', handleStorage);
  return () => window.removeEventListener('storage', handleStorage);
}, []);

const handleLogout = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('favoriteItems');
  setUsername(null);
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