import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';
import FavoriteCities from './FavoriteCities';

import '../styles/Weather.scss';

const Weather = () => {
  const [error, setError] = useState(null);
  const [setSelectedCity] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  const handleCitySelection = (city) => {
    setSelectedCity(city);
    setWeatherData(city);
  };

  const handleToggleFavorite = (city) => {
    const isFavorite = favorites.includes(city.name);

    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav !== city.name));
    } else {
      setFavorites([...favorites, city.name]);
    }
  };

  const handleCityCardClick = (city) => {
    fetchWeather(city);
  };

  const apiKey = '774702a32cc9299a092daac35db1f5b1';

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
      console.log(response);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
      setError('City not found. Please try again.');
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <WeatherForm onSubmit={fetchWeather} onCitySelect={handleCitySelection}/>
      {error && <p className="error-message">{error}</p>}
      {weatherData && <WeatherInfo weatherData={weatherData} onToggleFavorite={handleToggleFavorite}/>}
      <FavoriteCities favorites={favorites} onCityCardClick={handleCityCardClick} />
    </div>
  );
};

export default Weather;