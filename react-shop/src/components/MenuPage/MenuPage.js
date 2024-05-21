import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { MenuItem } from "../MenuItem/MenuItem"
import { menuItemsList } from "./menuItemsList"

const Item = styled(Paper)(({ theme }) => ({
backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
...theme.typography.body2,
padding: theme.spacing(2),
textAlign: 'center',
color: theme.palette.text.secondary,
}));

export const MenuPage = () => {
  return (
    <Box sx={{
      flexGrow: 1,
      p: 5
    }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        { menuItemsList.map((listItem) => (
          <Grid item xs={6} md={4} lg={3} key={listItem.id}>
            <Item>
              <MenuItem
                id={listItem.id}
                name={listItem.name}
                description={listItem.description}
                price={listItem.price}
                imageUrl={listItem.imageUrl}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
