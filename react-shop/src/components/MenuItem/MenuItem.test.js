import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MenuItem } from "./MenuItem";
import { CartContext, CartContextWrapper } from "../../contexts/CartContext";
import { StoreHeader } from "../StoreHeader/StoreHeader";

const listItem = {
  id: 12,
  name: "Chill Out Wings",
  description: "A plate of wings with a side of ranch.",
  price: 795,
  "imageUrl": "https://assets.admin.getabite.co/items/olo/5110570-1563923712675.jpg"
}

it('renders without crashing', () => {
  render(<MenuItem listItem={listItem} />)
});

it('renders the correct name', () => {
  render(<MenuItem listItem={listItem} />);
  expect(screen.getByText('Chill Out Wings')).toBeInTheDocument();
});

it('renders the correct description', () => {
  render(<MenuItem listItem={listItem} />);
  expect(screen.getByText('A plate of wings with a side of ranch.')).toBeInTheDocument();
});

it('renders the correct price, displayed by the displayPrice helper', () => {
  render(<MenuItem listItem={listItem} />);
  expect(screen.getByText('$7.95')).toBeInTheDocument();
});

it('adds an item to the cart when the add to cart button is clicked', () => {
  render(
    <BrowserRouter>
      <CartContextWrapper>
        <StoreHeader />
        <MenuItem listItem={listItem} />
      </CartContextWrapper>
    </BrowserRouter>
  );

  fireEvent.click(screen.getByText('Add to cart'));

  expect(screen.getByText('1 Chill Out Wings was added to your cart!')).toBeInTheDocument();

  const cartNumberDisplay = screen.getByTestId('number-of-items-in-cart');
  expect(within(cartNumberDisplay).getByText('1')).toBeInTheDocument(); // this checks for the number next to the cart.

  fireEvent.click(screen.getByText('Add to cart'));

  expect(within(cartNumberDisplay).getByText('2')).toBeInTheDocument(); // check for update
});
