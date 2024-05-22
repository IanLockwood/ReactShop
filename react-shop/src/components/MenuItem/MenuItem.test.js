import React from 'react';
import ReactDOM from 'react-dom/client';
import { MenuItem } from "./MenuItem";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(
    <React.StrictMode>
      <MenuItem />
    </React.StrictMode>
  );
});
