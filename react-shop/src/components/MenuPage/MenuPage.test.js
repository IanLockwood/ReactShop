import React from 'react';
import { render, screen } from '@testing-library/react';
import { MenuPage } from "./MenuPage";

it('renders without crashing', () => {
  render(<MenuPage />)
});

it('renders a list of food and drink items', () => {
  render(<MenuPage />);
  expect(screen.getAllByText('Add to cart')[0]).toBeInTheDocument();
  expect(screen.getAllByText('$', {exact: false})[0]).toBeInTheDocument();
});

// Since menu items can change, here I would usually test against a provided JSON.
// But since I'm doing that in the component right now anyway, it's the same thing.
it('renders specific food and drink items', () => {
  render(<MenuPage />);
  expect(screen.getByText('Carrot Cake')).toBeInTheDocument();
  expect(screen.getByText('Spindrift Raspberry')).toBeInTheDocument();
});

it('renders all items', () => {
  render(<MenuPage />);
  expect(screen.getAllByTestId('menuItemContainer').length).toBe(17);
});
