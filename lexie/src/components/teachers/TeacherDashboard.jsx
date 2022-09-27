import HomeButton from '../HomeButton.jsx';
import { Button, Card, Grid, CardMedia, CardContent } from '@mui/material';

const randomImg = require('../../assets/randomImg.js')


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
                style={{
                  height: 140,
                  width: 210
                }}
                // later: give teachers ability to add their own image
                image={randomImg()}
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