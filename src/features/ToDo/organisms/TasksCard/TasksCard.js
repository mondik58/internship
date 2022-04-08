import {Card, CardContent, CardActions, Typography} from '@mui/material';
import TaskList from 'features/ToDo/molecules/TaskList';
import AddTaskButton from 'features/ToDo/molecules/AddTaskButton';

const TaskCard = ({project, classes}) => (
  <Card className={classes.root} sx={{mt: 2}} variant="outlined">
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        Tasks
      </Typography>
      <TaskList tasks={project.tasks}/>
    </CardContent>
    <CardActions>
      <AddTaskButton projectId={project.id}/>
    </CardActions>
  </Card>
);

export default TaskCard;
