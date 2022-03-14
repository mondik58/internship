import {Grid, Typography} from '@mui/material';
import {useQuery} from 'urql';
import {CircularProgress} from '@mui/material';

import ToDoModal from 'features/ToDo/organisms/ToDoModal';
import ToDoList from 'features/ToDo/organisms/ToDoList';
import {GET_LISTS} from 'queries/GetLists/GetLists';

const Home = () => {
  const [{data, fetching}] = useQuery({
    query: GET_LISTS
  });
  const lists = data?.projects;

  return (
    <Grid 
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent='center'
      spacing={0}
    >
      <Grid 
        item
        xs={12}
        sx={{width: "100%"}}
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        {fetching ? <CircularProgress color="secondary" thickness={5}/> 
          : lists?.length ? lists?.map(list => (
            <ToDoList key={list.createdAt} list={list} />
          )) 
          : (
            <Typography 
              sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, 50%)"}} 
              color='textSecondary' 
              align="center"
            >
              You don't have any lists yet
            </Typography>
        )}
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
