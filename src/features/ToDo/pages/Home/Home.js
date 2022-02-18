import {Grid, Typography} from '@mui/material';
import ToDoModal from 'features/ToDo/organisms/ToDoModal';

const Home = () => {
  return (
    <Grid 
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
    >
      <Grid 
        item
        xs={12}
      >
        <Typography 
          sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, 50%)"}} 
          color='textSecondary' 
          align="center"
        >
          You don't have any lists yet
        </Typography>
      </Grid>
      <Grid 
        item
        xs={12}
      >
        <ToDoModal />
      </Grid>
    </Grid>
  );
}

export default Home;
