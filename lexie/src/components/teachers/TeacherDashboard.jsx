import HomeButton from '../HomeButton.jsx';
import { Button, Card, Grid, CardMedia, CardContent } from '@mui/material';

const readingImg = require('../../assets/reading.jpeg')

const TeacherDashboard = ({ setPage, assignments }) => {
  return (
    <>
      <h1>
        Teacher Dashboard
      </h1>
      {assignments.length > 0
      ?
      <Grid
      container
      spacing='10'>
       { assignments.map(assignment => <Grid item>
          <Card
            key={assignment._id}
            raised={true}>
              <CardMedia
                component='img'
                height='140'
                image={readingImg}
              />
              <CardContent>
                {assignment.title}
              </CardContent>
          </Card>
        </Grid>)}
      </Grid>
      :
      <div>Try creating your first assignment!</div>
      }
      <Button
        onClick={() => setPage('assignment-builder')}
        variant='contained'
        color='primary'>
        Create Assignment</Button>
      <HomeButton setPage={setPage} />
    </>
  )
}

export default TeacherDashboard;