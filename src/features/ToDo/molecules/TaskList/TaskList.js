import {List} from '@mui/material';
import Task from 'features/ToDo/molecules/Task';

const TaskList = ({tasks}) => {
  return (
    <List>
      {tasks &&
        tasks.map(task => <Task key={task.id} task={task} />)
      }
    </List>
  );
}

export default TaskList;
