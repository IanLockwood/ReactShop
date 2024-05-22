import { useState, createContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../siteTheme'
import { StoreHeader } from "../components/StoreHeader/StoreHeader";

export const CartContext = createContext();

const Layout = () => {
  const [globalCart, setGlobalCart] = useState({})
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("IansSantaMonicaCurrentOrder"));

    let cartLength = 0

    if (cart) {
      setGlobalCart(cart);

      Object.keys(cart).forEach((item, i) => {
        cartLength = cartLength + cart[item].quantity
      });
    }

    setNumberOfItemsInCart(cartLength);
  }, [numberOfItemsInCart])

  return (
    <CartContext.Provider
      value={{
        numberOfItemsInCart: numberOfItemsInCart,
        setNumberOfItemsInCart: setNumberOfItemsInCart,
        globalCart: globalCart,
        setGlobalCart: setGlobalCart
      }}
    >
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
    </CartContext.Provider>
  );
}

export default Layout;
