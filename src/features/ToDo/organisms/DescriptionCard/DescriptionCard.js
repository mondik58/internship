import {Card, CardContent, Typography} from '@mui/material';

const DescriptionCard = ({project, classes}) => (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Description
        </Typography>
        <Typography variant="h5" component="h2">
          {project.description}
        </Typography>
      </CardContent>
    </Card>
);

export default DescriptionCard;
