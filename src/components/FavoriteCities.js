import React from 'react';
import '../styles/FavoriteCities.scss';

const FavoriteCities = ({ favorites, onCityCardClick }) => {
  const handleCityCardClick = (city) => {
    onCityCardClick(city);
  };

  return (
    <div className="favorite-cities">
      <h3>Favorite Cities</h3>
      {favorites.length === 0 ? (
        <p>No favorite cities added</p>
      ) : (
        <div className="city-cards">
          {favorites.map((city) => (
            <div role={"button"} key={city} className="city-card" onClick={() => handleCityCardClick(city)}>
              <p>{city}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteCities;