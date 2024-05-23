import React, { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { addItemToCart, displayPrice } from '../../utils/utils'
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const MenuItem = ({listItem}) => {
  const {
    name,
    description,
    price,
    imageUrl
  } = listItem;

  const currentCart = useContext(CartContext);

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

  const successMessage = `1 ${name} was added to your cart!`

  return (
    <Box>
      <Box
        component="img"
        sx={{
          display: { xs: 'flex'},
          maxWidth: '100%'
        }}
        alt={name}
        src={imageUrl}
      />
      <Box
        sx={{
          p: 1,
          minHeight: 200,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography sx={{fontWeight: 'bold'}}>{name}</Typography>
        <Typography>{price ? displayPrice(price) : free}</Typography>
        <Typography sx={{flexGrow: 1}}>{description}</Typography>
        <Button
          variant="contained"
          onClick={() => addItemToCart(listItem, currentCart.setNumberOfItemsInCart, setOpen(true))}
        >
          Add to cart
        </Button>
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
