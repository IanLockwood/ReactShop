import { ThemeProvider } from '@mui/material/styles';
import { theme } from './siteTheme'
import './App.css';

import { StoreHeader } from "./components/StoreHeader/StoreHeader"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header>
          <StoreHeader />
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
