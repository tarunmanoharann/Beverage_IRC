import React, { useEffect, useState } from 'react';
import '../assets/css/favoritesPage.css';

const FavoritesPage = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteItems')) || [];
    setFavoriteItems(savedFavorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favoriteItems.filter(item => item.id !== id);
    setFavoriteItems(updatedFavorites);
    localStorage.setItem('favoriteItems', JSON.stringify(updatedFavorites));
    window.dispatchEvent(new Event('storage')); // Add this line
  };
  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      {favoriteItems.length === 0 ? (
        <p>You haven't added any favorites yet</p>
      ) : (
        <div className="favorites-grid">
          {favoriteItems.map((item) => (
            <div key={item.id} className="favorite-item">
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <button onClick={() => removeFromFavorites(item.id)}>Remove from Favorites</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;