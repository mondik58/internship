import {AppBar, Box, Toolbar, Button, Typography} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles';
import {useNavigate} from 'react-router-dom';
import {ArrowBack} from '@material-ui/icons';

import EditList from 'features/ToDo/organisms/EditList';

const useStyles = makeStyles({
  margin: {
    marginRight: '10px'
  },
});

const ProjectHeader = ({project}) => {
  const classes = useStyles();
  const {title} = project;
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            <Button 
              color="inherit" 
              onClick={goBack}
              data-testid="back-button"
            >
              <ArrowBack fontSize="medium" className={classes.margin} />
              {title}
            </Button> 
          </Typography>
          <EditList />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ProjectHeader;
