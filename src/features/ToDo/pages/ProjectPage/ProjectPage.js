import {useQuery} from 'urql';
import {useParams} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, CardActions, Typography, Box} from '@mui/material';

import MainTemplate from 'components/templates/MainTemplate';
import ProjectHeader from 'features/ToDo/organisms/ProjectHeader';
import {GET_TASK} from 'queries/GetTask/GetTask';
import TaskList from 'features/ToDo/molecules/TaskList';
import AddTaskButton from 'features/ToDo/molecules/AddTaskButton';
import DeleteProjectButton from 'features/ToDo/atoms/DeleteProjectButton';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    marginTop: '100px',
  },
});


const ProjectPage = () => {
  const classes = useStyles()
  const {id} = useParams();
  const [{data, fetching}] = useQuery({
    query: GET_TASK,
    variables: {id}
  });
  const project = !fetching && data?.project;

  return (
    <MainTemplate header={<ProjectHeader project={project} />}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Description
          </Typography>
          <Typography variant="h5" component="h2">
            {project.description}
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root} sx={{mt: 2}} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Tasks
          </Typography>
          <TaskList tasks={project.tasks}/>
        </CardContent>
        <CardActions>
          <AddTaskButton projectId={project.id}/>
        </CardActions>
      </Card>
      <Box sx={{width: '100%', mt: 4}}>
        <DeleteProjectButton id={project.id} />
      </Box>
    </MainTemplate>
  );
}

export default ProjectPage;
