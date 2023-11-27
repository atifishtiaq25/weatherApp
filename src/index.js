import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './components/Weather.js';
import './index.css';
import './styles/Weather.scss';

ReactDOM.createRoot(
  document.getElementById("root"),
)
.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>,
);