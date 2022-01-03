import { AppBar, Box, Toolbar, Button } from '@mui/material';
import React from 'react';
import HeaderTypo from '../../atoms/Typography/header';

const Header = () => {

  const onClick = () => console.log('clicked')
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar>
          <HeaderTypo variant="h6" component="div" sx={{flexGrow: 1}}>ToDoList</HeaderTypo>
          <Button onClick={onClick} color="inherit" key="sign-up">SIGN UP</Button>
          <Button onClick={onClick} color="inherit" key="log-in">LOG IN</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
