import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { render, screen, fireEvent, within } from '@testing-library/react';
import {
  updateCartNumber,
  displayPrice,
  addItemToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  calculateTotal,
  placeOrder
} from './utils'
import { CartContext, CartContextWrapper } from "../contexts/CartContext";
import { StoreHeader } from "../components/StoreHeader/StoreHeader";
import { MenuItem } from "../components/MenuItem/MenuItem";
import { CartItem } from "../components/CartItem/CartItem";

const listItem = {
  id: 12,
  name: "Chill Out Wings",
  description: "A plate of wings with a side of ranch.",
  price: 795,
  imageUrl: "https://assets.admin.getabite.co/items/olo/5110570-1563923712675.jpg",
  quantity: 1
}

describe('addItemToCart', () => {
  it('should add the correct item to the cart', () => {
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
});

describe('decreaseQuantity', () => {
  it('should decrease the quantity of an item', () => {
    // would directly test decreaseQuantity and check that it did.
  });

  it('should decrease the quantity of the correct item', () => {
  });

  it('should not decrease the quantity of the item below 1', () => {
  });
});
