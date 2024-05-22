import React from 'react';
import ReactDOM from 'react-dom/client';
import { MenuPage } from "./MenuPage";
import { menuItemsList } from "./menuItemsList";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(
    <React.StrictMode>
      <MenuPage />
    </React.StrictMode>
  );
});
