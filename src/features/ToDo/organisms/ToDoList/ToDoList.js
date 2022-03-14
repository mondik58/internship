import {Card, CardContent, CardHeader, Box} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

import AddTaskButton from 'features/ToDo/molecules/AddTaskButton';
import TaskList from 'features/ToDo/molecules/TaskList';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    width: "100%"
  },
  title: {
    textAlign: "center",
    color: "#fff"
  },
  content: {
    backgroundColor: "#1976d2",
  },
  link: {
    width: "100%",
    display: "inline-block"
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2.5rem"
  }
});

const ToDoList = ({list}) => {
  const classes = useStyles()
  const {id, title, tasks} = list;
  return (
    <Box className={classes.container}>
      <Card className={classes.root} variant="outlined">
        <CardHeader 
          className={`${classes.content} ${classes.title}`} 
          title={
            <Link 
              className={classes.link} 
              to={`/list/${id}`}
            >
              {title}
            </Link>
          } />
        <CardContent>
          <TaskList tasks={tasks} />
          <AddTaskButton projectId={id} />
        </CardContent>
      </Card>
    </Box>
  );
}

export default ToDoList;
