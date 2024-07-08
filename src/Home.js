import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const backgroundStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL + '/background.jpg'})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function Home() {
  return (
    <Box style={backgroundStyle}>
      <Paper style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to My Application
        </Typography>
        <img src="path_to_logo" alt="Logo" style={{ width: '200px', height: '200px', marginBottom: '20px' }} />
        <Typography variant="body1">
          Welcome to my application! This is a simple example of a React application with a privacy policy page.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Home;
