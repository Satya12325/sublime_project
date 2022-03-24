import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <div style={{width:"20%",display: "flex",justifyContent: "space-between"}}>
         
          <Typography variant="h6" color="inherit" component="div">
          <Link to="/" style={{ textDecoration: "none", color: "#fff"}}> Sign in</Link>
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
           <Link to="/login" style={{ textDecoration: "none", color: "#fff"}}>Login</Link>
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}