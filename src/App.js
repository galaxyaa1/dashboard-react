import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar';
import Drawer from './components/Drawer';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutPage from './AboutPage';
import Analysis from './Analysis';


const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Router>
      <CssBaseline />
      <NavBar handleDrawerOpen={handleDrawerOpen} />
      <Drawer isOpen={isDrawerOpen} handleClose={handleDrawerClose} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/analysis" element={<Analysis />} />
        {/* Other top-level routes */}
      </Routes>
    </Router>
  );
};

export default App;



