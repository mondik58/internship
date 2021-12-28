import { Typography } from '@mui/material';
import React from 'react';

const HeaderTypo = ({children, ...props}) => {
  return (
      <Typography {...props}>{children}</Typography>
  );
}

export default HeaderTypo;
