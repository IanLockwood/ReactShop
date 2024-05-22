import React from 'react';
import { render, screen } from '@testing-library/react';
import { MenuItem } from "./MenuItem";

const sampleItem = {
  id: 6,
  name: "Carrot Cake",
  description: "A classic carrot cake with cream cheese frosting.",
  price: 0,
  imageUrl: "https://assets.admin.getabite.co/items/olo/386331-1563923698406.jpg"
}

it('renders without crashing', () => {
  render(<MenuItem listItem={sampleItem} />)
});

// it('renders a list of food and drink items', () => {
//   render(<MenuItem />);
//   expect(screen.getAllByText('Add to cart')[0]).toBeInTheDocument();
//   expect(screen.getAllByText('$', {exact: false})[0]).toBeInTheDocument();
// });
//
// // Since menu items can change, here I would usually test against a provided JSON.
// // But since I'm doing that in the component right now anyway, it's the same thing.
// it('renders specific food and drink items', () => {
//   render(<MenuItem />);
//   expect(screen.getByText('Carrot Cake')).toBeInTheDocument();
//   expect(screen.getByText('Spindrift Raspberry')).toBeInTheDocument();
// });
//
// it('renders all items', () => {
//   render(<MenuItem />);
//   expect(screen.getAllByTestId('menuItemContainer').length).toBe(17);
// });
