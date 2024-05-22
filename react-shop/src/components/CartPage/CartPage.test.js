import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartPage } from "./CartPage";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(
    <React.StrictMode>
      <CartPage />
    </React.StrictMode>
  );
});
