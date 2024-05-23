import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import { increaseQuantity, decreaseQuantity, deleteItem, calculateTotal, placeOrder } from '../../utils/utils';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CartItem } from '../CartItem/CartItem'

export const CartPage = () => {
  const currentOrder = JSON.parse(localStorage.getItem("IansSantaMonicaCurrentOrder"));
  const orderKeyArray = currentOrder ? Object.keys(currentOrder) : [];

  const currentCart = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = orderKeyArray.length ? calculateTotal() : '$0.00';

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Box sx={{pt:5}}>
        <Typography variant="h3" textAlign="center">Your Cart</Typography>
      </Box>

      {orderKeyArray.length ? (
        <Box sx={{
          width: { xs: '100%', md: 800, lg: 1000 }
        }}>
          {
            orderKeyArray.map((itemID, i) => {
            return (
              <CartItem
                key={itemID}
                listItem={currentOrder[itemID]}
                id={itemID}
                onIncrement={increaseQuantity}
                onDecrement={decreaseQuantity}
                onDelete={deleteItem}
              />
            )})
          }
          <Typography variant='h5' sx={{px: 5}}>Total: {totalPrice}</Typography>
          <Box sx={{display: 'flex', px: 5, my: 3}}>
            <Button
              variant="contained"
              sx={{flexGrow: 1}}
              onClick={() => placeOrder(currentCart.setGlobalCart, currentCart.setNumberOfItemsInCart, navigate)}
            >
              Checkout
            </Button>
          </Box>
        </Box>

      ):(
        <Box sx={{p:5}}>
          <Typography variant="h4" textAlign="center">Nothing yet!</Typography>
        </Box>
      )}
    </Box>
  );
}
