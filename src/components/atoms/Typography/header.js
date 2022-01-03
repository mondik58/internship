import { Typography } from '@mui/material';

const HeaderTypo = ({children, ...props}) => {
  return (
      <Typography {...props}>{children}</Typography>
  );
}

export default HeaderTypo;
