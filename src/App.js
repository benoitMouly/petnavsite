import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button, Box } from '@mui/material';
import Home from './components/Home';
import PrivacyPolicy from './PrivacyPolicy';
import logo from './assets/PetNav.png';

function App() {
  return (
    <Router>
      <AppBar position="static" style={{ backgroundColor: '#285c3f' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <img src={logo} alt="PetNav Logo" style={{ height: '40px', marginRight: '10px' }} />
            <Typography variant="h6" fontFamily="'Comfortaa', cursive" color="#fff">
              PetNav
            </Typography>
          </Box>
          <Box>
            <Button color="inherit" component={Link} to="/" style={{ marginRight: '10px' }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/privacy-policy">
              Privacy Policy
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '0px' }} maxWidth={false} disableGutters>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
