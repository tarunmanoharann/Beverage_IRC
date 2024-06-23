import React, { useState, useEffect } from 'react';
import '../assets/css/carousel.css';
import '../assets/css/page.css';
import FilterOptions from '../Components/FilterOptions';
import ProductGrid from '../Products/ProductGrid';

import tea01 from '../assets/images/tea/tea1.jpg';
import tea02 from '../assets/images/tea/tea2.jpg';
import tea03 from '../assets/images/tea/tea3.jpg';
import tea04 from '../assets/images/tea/tea4.jpg';
import tea05 from '../assets/images/tea/tea5.jpg';

const items = [
  { id: 1, image: tea01, title: "Classic Earl Grey", price: "$4.99" },
  { id: 2, image: tea02, title: "Jasmine Green Tea", price: "$5.49" },
  { id: 3, image: tea03, title: "Chamomile Blend", price: "$4.79" },
  { id: 4, image: tea04, title: "English Breakfast", price: "$4.99" },
  { id: 5, image: tea05, title: "Peppermint Herbal", price: "$5.29" },
];

export default function Tea() {
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

    <div className="content-section">
        <aside className="filter-sidebar">
          <FilterOptions />
        </aside>
        <main className="product-main">
          <ProductGrid items={items} />
        </main>
      </div>

    </div>
  );
}