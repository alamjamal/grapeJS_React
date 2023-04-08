import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" 
    //   style={{background:"#e9b2b2"}}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TeachAnda
          </Typography>
          <Button color="inherit">Docs</Button><a href='https://api.alamjamal.ml/api/api-docs/' target="_blank"><Button color="inherit" style={{color:"white"}}>Api's</Button> </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}