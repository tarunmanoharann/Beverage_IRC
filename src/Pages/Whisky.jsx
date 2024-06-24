import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import '../assets/css/carousel.css';
import '../assets/css/page.css';
import FilterOptions from '../Components/FilterOptions';
import ProductGrid from '../Products/ProductGrid';

import whisky01 from '../assets/images/whisky/whisky1.jpg'
import whisky02 from '../assets/images/whisky/whisky2.jpg'
import whisky03 from '../assets/images/whisky/whisky3.jpg'
import whisky04 from '../assets/images/whisky/whisky4.jpg'
import whisky05 from '../assets/images/whisky/whisky5.jpg'

const items = [
  { id: 1, image: whisky01, title: "Classic Earl Grey", price: "$4.99" },
  { id: 2, image: whisky02, title: "Jasmine Green Tea", price: "$5.49" },
  { id: 3, image: whisky03, title: "Chamomile Blend", price: "$4.79" },
  { id: 4, image: whisky04, title: "English Breakfast", price: "$4.99" },
  { id: 5, image: whisky05, title: "Peppermint Herbal", price: "$5.29" },
];

export default function Whisky() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteItems')) || [];
    setCartItems(savedCart);
    setFavoriteItems(savedFavorites);

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const addToCart = (item) => {
    const username = localStorage.getItem('username');
    if (username) {
      const updatedCart = [...cartItems, item];
      setCartItems(updatedCart);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      toast.success('Item added to cart!');
    } else {
      toast.warning('Please log in to add items to cart');
    }
  };

  const addToFavorites = (item) => {
    const username = localStorage.getItem('username');
    if (username) {
      const updatedFavorites = [...favoriteItems, item];
      setFavoriteItems(updatedFavorites);
      localStorage.setItem('favoriteItems', JSON.stringify(updatedFavorites));
      toast.success('Item added to favorites!');
    } else {
      toast.warning('Please log in to add items to favorites');
    }
  };

  return (
    <div className="page-container">
    <div className="carousel-container">
      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            <div className="item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="item-info">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <div className="button-group">
              <button className="add-to-cart" onClick={() => addToCart(item)}>Add to Cart</button>
              <button className="favorite" onClick={() => addToFavorites(item)}>❤</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>&lt;</button>
      <button className="carousel-control next" onClick={nextSlide}>&gt;</button>
    </div>
    <div className="content-section">
        <aside className="filter-sidebar">
          <FilterOptions />
        </aside>
        <main className="product-main">
        <ProductGrid items={items} addToCart={addToCart} addToFavorites={addToFavorites} />
        </main>
    </div>
    </div>
  );
}