import React from "react";
import { Link } from "react-router-dom";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "../assets/css/nav.css";

function Nav() {
  return (
    <nav className="nav-area">

      <ul className="nav-links">
        <li className="center">
          <Link to="/">
            <b>SmoothGulp</b>
          </Link>
        </li>
        <li className="search-bar">
          <div className="search-input-container">
            <input
              type="text"
              className="search-input"
              placeholder={`   ${String.fromCodePoint(0x1F50D)} Search`}
            />
          </div>
        </li>
        <li className="logo">
          <Link to="">
          <FavoriteBorderIcon/>
          </Link>
        </li>
        <li className="logo">
          <Link to="">
          <ShoppingCartOutlinedIcon/>
          </Link>
        </li>
        <li className="logo">
          <Link to="/login">
            <AccountCircleSharpIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
