import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import SignInForm from './SignInForm';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Logo = styled('asif.png')({
  height: '40px',
  marginRight: 'auto',
});

const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: '4px',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '0 8px',
});

const SearchInput = styled(InputBase)({
  marginLeft: '8px',
  flex: 1,
});

const NavBar = ({ handleDrawerOpen, drawerOpen }) => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignInClick = () => {
    setIsSignInOpen(true);
  };

  const handleCloseSignIn = () => {
    setIsSignInOpen(false);
  };

  return (
    <AppBar position="fixed" sx={{ width: drawerOpen ? `calc(100% - 240px)` : '100%', transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>
        <Logo src="/images/web/asif.jpg" alt="Company Logo" />
        <SearchContainer>
          <SearchIcon />
          <SearchInput placeholder="Search..." />
        </SearchContainer>
        <IconButton color="inherit" onClick={handleSignInClick}>
          <AccountCircleIcon />
        </IconButton>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
      </Toolbar>
      <SignInForm open={isSignInOpen} handleClose={handleCloseSignIn} />
    </AppBar>
  );
};

export default NavBar;
