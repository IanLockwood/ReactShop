import React, { useState, useContext } from 'react';
import { CartContext } from '../../pages/Layout'
import { displayPrice } from '../../utils/utils'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

export const CartItem = ({
  listItem,
  id,
  onIncrement,
  onDecrement,
  onDelete
}) => {
  const currentCart = useContext(CartContext);

  const {
    name,
    description,
    price,
    quantity
  } = listItem;

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const free = "Free!"

  const successMessage = `${name} was removed from your cart.`

  return (
    <Box key={id}>
      <Box
        sx={{
          py: 2,
          px: 3,
          m: 3,
          border: 1,
          display: 'flex',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1
          }}
        >
          <Typography sx={{fontWeight: 'bold'}}>{name}</Typography>
          <Typography>{description}</Typography>
          <Typography>{price ? displayPrice(price) : free}</Typography>
        </Box>
        <Box>
          <IconButton
            aria-label="decrement"
            onClick={() => onDecrement(listItem, id, currentCart.setGlobalCart, currentCart.setNumberOfItemsInCart)}
          >
            <IndeterminateCheckBoxIcon />
          </IconButton>
            {quantity}
          <IconButton
            aria-label="increment"
            onClick={() => onIncrement(listItem, id, currentCart.setGlobalCart, currentCart.setNumberOfItemsInCart)}
          >
            <AddBoxIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => onDelete(listItem, id, currentCart.setGlobalCart, currentCart.setNumberOfItemsInCart, setOpen(true))}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={successMessage}
        action={action}
      />
    </Box>
  );
}
