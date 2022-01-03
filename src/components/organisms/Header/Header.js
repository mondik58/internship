import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HeaderTypo from '../../atoms/Typography/header';

const Header = () => {

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar>
          <HeaderTypo variant="h6" component="div" sx={{flexGrow: 1}}>ToDoList</HeaderTypo>
          <Button color="inherit" key="sign-up">
            <Link to="/sign-up">
              SIGN UP
            </Link>
          </Button>
          
          <Button color="inherit" key="log-in">
          <Link to="/login">
              LOG IN
          </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
