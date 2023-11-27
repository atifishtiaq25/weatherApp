import React, { useState } from 'react';
import '../styles/WeatherForm.scss';

const WeatherForm = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(city);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit(city);
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="input-field"
      />
      <button className="submit-button" onClick={handleSubmit}>
        Get Weather
      </button>
    </div>
  );
};

export default WeatherForm;
