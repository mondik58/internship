import {List} from '@mui/material';
import Task from 'features/ToDo/molecules/Task';

const TaskList = ({tasks}) => {
  return (
    <List>
      {tasks?.length ?
        tasks.map(task => <Task key={task.createdAt} task={task} />)
        :
        null
      }
    </List>
  );
}

export default TaskList;
