import {useQuery} from 'urql';
import {useParams} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {Box} from '@mui/material';

import MainTemplate from 'components/templates/MainTemplate';
import ProjectHeader from 'features/ToDo/organisms/ProjectHeader';
import {GET_TASK} from 'queries/Task/GetTask';
import DeleteProjectButton from 'features/ToDo/atoms/DeleteProjectButton';
import DescriptionCard from 'features/ToDo/organisms/DescriptionCard';
import TaskCard from 'features/ToDo/organisms/TaskCard';

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
      {project.description && <DescriptionCard project={project} classes={classes}/>}
      <TaskCard project={project} classes={classes}/>
      <Box sx={{width: '100%', mt: 4}}>
        <DeleteProjectButton id={project.id} />
      </Box>
    </MainTemplate>
  );
}

export default ProjectPage;
