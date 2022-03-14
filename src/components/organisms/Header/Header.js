import {AppBar, Box, Toolbar, Button, Typography} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import {ROUTES} from 'constants/routes';
import {getToken, deleteToken} from 'utils/cookies';

const Header = () => {
  const {LOGIN, SIGN_UP} = ROUTES;
  const token = getToken();
  const navigate = useNavigate();

  const onClick = () => {
    deleteToken();
    navigate(LOGIN);
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" component='div' sx={{flexGrow: 1}}>ToDo List</Typography>
          {token 
            ?
              <Button onClick={onClick} color="inherit">
                LOG OUT
              </Button>
            : 
              <>
                <Button color="inherit" component={Link} to={SIGN_UP}>
                  SIGN UP
                </Button> 
                <Button color='inherit' component={Link} to={LOGIN}>
                  LOG IN
                </Button>
              </>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
