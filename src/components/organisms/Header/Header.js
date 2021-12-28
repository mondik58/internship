import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import HeaderTypo from '../../atoms/Typography/header';
import ButtonMui from '../../atoms/Button/Button';

const Header = () => {

  const onClick = () => console.log('clicked')
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar>
          <HeaderTypo variant="h6" component="div" sx={{flexGrow: 1}}>ToDoList</HeaderTypo>
          <ButtonMui onClick={onClick} color="inherit" key="sign-up">SIGN UP</ButtonMui>
          <ButtonMui onClick={onClick} color="inherit" key="log-in">LOG IN</ButtonMui>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
