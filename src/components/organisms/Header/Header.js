import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/api';

const Header = () => {
  const {LOGIN, SIGN_UP} = ROUTES;

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" component='div' sx={{flexGrow: 1}}>ToDoList</Typography>
          <Button color="inherit" component={Link} to={SIGN_UP}>
            SIGN UP
          </Button>
          <Button color='inherit' component={Link} to={LOGIN}>
            LOG IN
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
