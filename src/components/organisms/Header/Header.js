import {AppBar, Box, Toolbar, Button, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {ROUTES} from 'constants/api';
import {getToken} from 'utils/cookies';

const Header = () => {
  const {LOGIN, SIGN_UP} = ROUTES;
  const token = getToken();
  const buttonsRender = (
    <>
      <Button color="inherit" component={Link} to={SIGN_UP}>
        SIGN UP
      </Button> 
      <Button color='inherit' component={Link} to={LOGIN}>
        LOG IN
      </Button>
    </>
  );
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" component='div' sx={{flexGrow: 1}}>ToDoList</Typography>
          {token 
            ?
              <Button color="inherit">
                LOG OUT
              </Button>
            : 
              buttonsRender
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
