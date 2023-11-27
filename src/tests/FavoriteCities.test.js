import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FavoriteCities from '../components/FavoriteCities';

test('renders FavoriteCities component with no favorite cities', () => {
  render(<FavoriteCities favorites={[]} />);
  const noFavoritesElement = screen.getByText(/no favorite cities added/i);
  expect(noFavoritesElement).toBeInTheDocument();
});

test('renders FavoriteCities component with favorite cities', () => {
  const mockFavorites = ['City1', 'City2'];
  render(<FavoriteCities favorites={mockFavorites} />);
  const cityElements = screen.getAllByRole('button');
  expect(cityElements).toHaveLength(mockFavorites.length);
});

test('calls onCityCardClick when a city card is clicked', () => {
  const mockOnCityCardClick = jest.fn();
  const mockFavorites = ['City1', 'City2'];
  render(<FavoriteCities favorites={mockFavorites} onCityCardClick={mockOnCityCardClick} />);
  const cityButton = screen.getByText(/city1/i); // Adjust the text based on your actual city names
  fireEvent.click(cityButton);
  expect(mockOnCityCardClick).toHaveBeenCalledWith('City1');
});