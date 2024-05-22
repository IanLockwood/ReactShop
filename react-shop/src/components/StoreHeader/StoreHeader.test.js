import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoreHeader } from "./StoreHeader";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(
    <React.StrictMode>
      <StoreHeader />
    </React.StrictMode>
  );
});
