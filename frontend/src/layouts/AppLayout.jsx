import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from '../components/NavBar';

const AppLayout = () => {
  return (
    <Box>
      <Navbar />
      <Box component="main">
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;