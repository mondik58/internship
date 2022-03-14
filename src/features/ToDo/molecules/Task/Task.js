import {ListItem, ListItemIcon, ListItemText, Checkbox, IconButton, ListItemSecondaryAction} from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles';
import {useMutation} from 'urql';
import {UPDATE_TASK} from 'mutations/UpdateTask/UpdateTask';
import {DELETE_TASK} from 'mutations/DeleteTask/DeleteTask';

const useStyles = makeStyles({
  underlined: {
    textDecoration: 'line-through',
  }
});

const Task = ({task}) => {
  const classes = useStyles();
  const {id, content, done} = task;
  const labelId = `checkbox-list-label-${id}`;
  const [, updateTask] = useMutation(UPDATE_TASK);
  const [, deleteTask] = useMutation(DELETE_TASK);

  const handleToggle = () => {
    updateTask({id: id, done: !done})
  };

  const onDeleteTask = () => deleteTask({id});

  return (
    <ListItem 
      key={id} 
      role={undefined} 
      dense 
      button 
      onClick={handleToggle}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={done}
          tabIndex={-1}
          disableRipple
          inputProps={{'aria-labelledby': labelId}}
        />
      </ListItemIcon>
      <ListItemText 
        id={labelId} 
        primary={content} 
        className={done ? classes.underlined : null} 
      />
      <ListItemSecondaryAction>
        <IconButton onClick={onDeleteTask} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Task;
