import React from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const DrawerContainer = styled(Box)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between', // Align items to the left and right edges
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  backgroundColor: theme.palette.primary.main, // Set background color to primary color
  color: theme.palette.common.white, // Set text color to white
}));

const Drawer = ({ isOpen, handleClose }) => {
  const theme = useTheme();

  return (
    <MuiDrawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: theme.palette.grey[600], 
        },
      }}
    >
      <DrawerHeader>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Add your logo image here */}
          <img src="/images/web/asif.jpg" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          <h3>My Dashboard</h3>
        </div>
        <IconButton onClick={handleClose} sx={{ '&:hover': { color: 'white' } }}> 
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <DrawerContainer>
        <List>
          <ListItem button component={Link} to="/" sx={{ color: 'white' }}> {/* Set text color to white */}
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about" sx={{ color: 'white' }}> {/* Set text color to white */}
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/contact" sx={{ color: 'white' }}> {/* Set text color to white */}
            <ListItemIcon>
              <ShoppingBasketIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button component={Link} to="/Analysis" sx={{ color: 'white' }}> {/* Set text color to white */}
            <ListItemIcon>
              <ShoppingBasketIcon />
            </ListItemIcon>
            <ListItemText primary="Analysis" />
          </ListItem>
          <ListItem button component={Link} to="/contact" sx={{ color: 'white' }}> {/* Set text color to white */}
            <ListItemIcon>
              <ShoppingBasketIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </List>
      </DrawerContainer>
    </MuiDrawer>
  );
};

export default Drawer;
