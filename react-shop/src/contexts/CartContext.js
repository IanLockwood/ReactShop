import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartContextWrapper = (props) => {
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
      {props.children}
    </CartContext.Provider>
  );
}
