import { Outlet } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../siteTheme'

import { StoreHeader } from "../components/StoreHeader/StoreHeader";

const Layout = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header>
          <StoreHeader />
        </header>
      </ThemeProvider>
      <body>
        <Outlet />
      </body>
    </div>
  );
}

export default Layout;
