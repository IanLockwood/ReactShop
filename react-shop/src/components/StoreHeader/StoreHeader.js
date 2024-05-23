import React, { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

export const StoreHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const currentCart = useContext(CartContext);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              display: { xs: 'none', md: 'flex'},
              maxHeight: { xs: 20 },
              mr: 1,
            }}
            alt="Ians Logo White"
            src="/Ians-logo-white.png"
          />

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key="menu" onClick={handleCloseNavMenu} component={Link} to="/">
                <Typography textAlign="left">Menu</Typography>
              </MenuItem>
              <MenuItem key="about" onClick={handleCloseNavMenu} component={Link} to="/about">
                <Typography textAlign="left">About Us</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
          }}>
            <Box
              component="img"
              sx={{
                display: { xs: 'flex', md: 'none' },
                maxHeight: { xs: 20 },
              }}
              alt="Ians Logo White"
              src="/Ians-logo-white.png"
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key="menu"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              component={Link} to="/"
            >
              Menu
            </Button>
            <Button
              key="about"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              component={Link} to="/about"
            >
              About Us
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <IconButton
            component={Link} to="/cart"
            size="large"
            aria-label="view your cart"
            aria-controls="menu-appbar"
            color="inherit"
          >
            <ShoppingCartIcon />
            { currentCart.numberOfItemsInCart > 0 &&
              currentCart.numberOfItemsInCart
            }
          </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default StoreHeader;
