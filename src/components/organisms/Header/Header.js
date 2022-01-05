import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/api';

const Header = () => {

  const { LOGIN, SIGN_UP } = ROUTES;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>ToDoList</Typography>
          <Button color="inherit">
            <Link to={ SIGN_UP }>SIGN UP</Link>
          </Button>
          <Button color="inherit">
            <Link to={ LOGIN }>LOG IN</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
