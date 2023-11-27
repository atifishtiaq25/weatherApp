import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WeatherForm from '../components/WeatherForm';

test('renders WeatherForm component', () => {
  render(<WeatherForm />);
  const inputElement = screen.getByPlaceholderText(/enter city/i);
  expect(inputElement).toBeInTheDocument();
});
