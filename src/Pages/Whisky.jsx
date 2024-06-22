import React, { useState, useEffect } from 'react';
import '../assets/css/carousel.css';


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

export default function TeaCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2500);

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
            style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
          >
            <img src={item.image} alt={item.title} />
            <div className="item-info">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>&lt;</button>
      <button className="carousel-control next" onClick={nextSlide}>&gt;</button>
    </div>
  );
}

