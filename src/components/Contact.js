import React from 'react';
import { Grid, Typography, IconButton, TextField, Button } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material'; // Remove unused icons

const Contact = () => {
  const handleIconClick = (link) => {
    window.open(link, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement functionality to handle form submission
    console.log('Form submitted');
  };

  return (
    <Grid container spacing={2} justifyContent="center"> {/* Center the content */}
      {/* Left side */}
      <Grid item xs={12} sm={6}sx={{ backgroundColor: 'grey', color: '#fff', padding: '16px', marginTop: '90px', marginLeft: '400px' }} >
        <Typography variant="h6" gutterBottom>
          Let's Get in Touch
        </Typography>
        <Typography variant="body2" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et suscipit felis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et suscipit felis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et suscipit felis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et suscipit felis.
        </Typography>
        <IconButton onClick={() => handleIconClick('https://www.facebook.com')}>
          <Facebook />
        </IconButton>
        <IconButton onClick={() => handleIconClick('https://www.instagram.com')}>
          <Instagram />
        </IconButton>
        <IconButton onClick={() => handleIconClick('https://www.twitter.com')}>
          <Twitter />
        </IconButton>
      </Grid>
      {/* Right side */}
      <Grid item xs={12} sm={6} sx={{ backgroundColor: 'grey', color: '#fff', padding: '16px', marginTop: '5px',marginBottom:'200px', marginLeft: '400px' }}>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth variant="outlined" margin="normal" label="Name" />
          <TextField fullWidth variant="outlined" margin="normal" label="Email" />
          <TextField fullWidth variant="outlined" margin="normal" label="Phone" />
          <TextField fullWidth variant="outlined" margin="normal" label="Message" multiline rows={4} />
          <Button variant="contained" color="primary" type="submit" sx={{ marginTop: '16px' }}>
            Send
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Contact;


