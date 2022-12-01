import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
            <h1 className='big-title'>Welcome to the Days Of Revival</h1>
          </Typography>
          <Link to='/addMember'>
        <Button className='add-member' variant="contained">Add member</Button>
        </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
