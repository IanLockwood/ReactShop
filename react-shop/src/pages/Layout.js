import { Outlet } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../siteTheme'
import { CartContextWrapper } from "../contexts/CartContext";
import { StoreHeader } from "../components/StoreHeader/StoreHeader";

const Layout = () => {
  return (
    <CartContextWrapper>
      <div className="App">
        <ThemeProvider theme={theme}>
          <header>
            <StoreHeader />
          </header>
        </ThemeProvider>
        <div>
          <Outlet />
        </div>
      </div>
    </CartContextWrapper>
  );
}

export default Layout;
