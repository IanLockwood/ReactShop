import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartItem } from "./CartItem";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(
    <React.StrictMode>
      <CartItem />
    </React.StrictMode>
  );
});
