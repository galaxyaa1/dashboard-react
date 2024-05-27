import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography, IconButton, Divider } from '@mui/material';
import { Edit, Visibility, Facebook, Instagram, Twitter, LocationOn, Phone } from '@mui/icons-material';

const Home = () => {
  const handleEditProfile = () => {
    console.log('Edit profile button clicked');
  };

  const handleViewProfile = () => {
    console.log('View profile button clicked');
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1, // Set z-index to make it below the card
          backgroundImage: 'url("/images/web/web.jpg")', // Background image path
          backgroundSize: 'cover', // Cover the entire area
          backgroundPosition: 'center', // Center the image
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(90% - 90px)' }}>
        <Card
          sx={{
            width: '400px',
            height: '400px', // Equal width and height
            backgroundColor: 'grey',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s',
            fontSize:'60px',
            '&:hover': {
              transform: 'translateY(-5px)',
              cursor: 'pointer',
              color: 'blue'
              
            },
            zIndex: 1, // Set z-index to make it above the background
          }}
        >
          <CardHeader
            title="ASIF ALI"
            subheader="Profile"
            avatar={<Avatar src="/images/asif.png" alt="John Doe" />}
            action={
              <IconButton onClick={handleEditProfile}>
                <Edit />
              </IconButton>
            }
          />
          <CardContent>
            <Typography variant="body1" gutterBottom>
              <LocationOn /> 123 Main St, City,Layyah, Country,Pakistan
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Phone /> +92-300-8761903
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" onClick={handleViewProfile} style={{ cursor: 'pointer' }}>
              <Visibility />
              View Profile
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5" gutterBottom sx={{marginLeft:'680px',color:'red',fontWeight:'bold'}}>
        Also Contact With Us;
      </Typography>
      {/* Add details of last transaction here */}
      <div style={{ textAlign: 'center',backgroundColor:'lightblue' }}>
        <Facebook
          sx={{ fontSize: '30px', margin: '0 10px', '&:hover': { color: '#3b5998', cursor: 'pointer' } }}
          onClick={() => window.open('https://www.facebook.com', '_blank')}
        />
        <Instagram
          sx={{ fontSize: '30px', margin: '0 10px', '&:hover': { color: '#c32aa3', cursor: 'pointer' } }}
          onClick={() => window.open('https://www.instagram.com', '_blank')}
        />
        <Twitter
          sx={{ fontSize: '30px', margin: '0 10px', '&:hover': { color: '#1da1f2', cursor: 'pointer' } }}
          onClick={() => window.open('https://www.twitter.com', '_blank')}
        />
      </div>
    </div>
  );
};

export default Home;








