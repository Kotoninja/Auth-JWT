import * as React from 'react';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  const fontSizeText = 18
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static" sx={{ paddingX: 10 }}>
        <Toolbar>
          <Button href="/" color="inherit" sx={{ fontSize: fontSizeText }}>Home</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button href="/login" color="inherit" sx={{ fontSize: fontSizeText }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}