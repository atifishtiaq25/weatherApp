import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import '../styles/WeatherInfo.scss';

const WeatherInfo = ({ weatherData, onToggleFavorite, isFavorite }) => {
  const iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  return (
    <div className="weather-info">
      <h2>
        {weatherData.name}{' '}
        <button onClick={() => onToggleFavorite(weatherData)}>{isFavorite ? <AiFillStar /> : <AiOutlineStar />}</button>
      </h2>
      <img src={iconUrl} alt={weatherData.weather[0].description} />
      <p>{weatherData.weather[0].description}</p>
      <p>Temperature: {weatherData.main.temp} °C</p>
      {weatherData.rain && (
        <p>
          Precipitation: {weatherData.rain['1h']} mm
        </p>
      )}
      {weatherData.main.feels_like && (
        <p>
          Feels like: {weatherData.main.feels_like} °C
        </p>
      )}
      {weatherData.main.humidity && (
        <p>
          Humidity: {weatherData.main.humidity}
        </p>
      )}
    </div>
  );
};

export default WeatherInfo;