import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Tea from "./Pages/Tea";
import Coffee from "./Pages/Coffee";
import Softdrinks from "./Pages/Softdrinks";
import Wine from "./Pages/Wine";
import Whisky from "./Pages/Whisky";
import CartPage from "./Pages/CartPage";
import FavoritesPage from "./Pages/FavoritesPage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Sign_up" element={<SignUp />} />
          <Route path="/tea" element={<Tea cartItems={cartItems} setCartItems={setCartItems} favoriteItems={favoriteItems} setFavoriteItems={setFavoriteItems} />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/softdrinks" element={<Softdrinks />} />
          <Route path="/wine" element={<Wine />} />
          <Route path="/whisky" element={<Whisky />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/favorites" element={<FavoritesPage favoriteItems={favoriteItems} setFavoriteItems={setFavoriteItems} />} />
        </Routes>
      </Router>
      <ToastContainer position="top-left" autoClose={3000} />
    </>
  );
}

export default App;