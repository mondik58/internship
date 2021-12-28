import { Button } from '@mui/material';
import React from 'react';


const ButtonMui = ({children, ...props}) => {
  return (
      <Button {...props}>{children}</Button>
  );
}

export default ButtonMui;
