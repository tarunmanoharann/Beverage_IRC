import React from 'react';
import '../assets/css/productGrid.css';

const ProductGrid = ({ items, addToCart, addToFavorites }) => {
  return (
    <div className="product-grid">
      {items.map((item) => (
        <div key={item.id} className="product-card">
          <div className="product-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="product-info">
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
  );
};

export default ProductGrid;