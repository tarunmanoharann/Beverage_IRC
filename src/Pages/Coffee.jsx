import React, { useState, useEffect } from 'react';
import '../assets/css/carousel.css';

import coffee01 from '../assets/images/coffee/coffee1.jpg'
import coffee02 from '../assets/images/coffee/coffee2.jpg'
import coffee03 from '../assets/images/coffee/coffee3.jpg'
import coffee04 from '../assets/images/coffee/coffee4.jpg'
import coffee05 from '../assets/images/coffee/coffee5.jpg'

const items = [
  { id: 1, image: coffee01, title: "Classic Earl Grey", price: "$4.99" },
  { id: 2, image: coffee02, title: "Jasmine Green Tea", price: "$5.49" },
  { id: 3, image: coffee03, title: "Chamomile Blend", price: "$4.79" },
  { id: 4, image: coffee04, title: "English Breakfast", price: "$4.99" },
  { id: 5, image: coffee05, title: "Peppermint Herbal", price: "$5.29" },
];

export default function Coffee() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
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

  return (
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
                <button className="add-to-cart">Add to Cart</button>
                <button className="favorite">❤</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>&lt;</button>
      <button className="carousel-control next" onClick={nextSlide}>&gt;</button>
    </div>
  );
}