import HomeButton from '../HomeButton.jsx';
import { Button, Card, Grid } from '@mui/material';

const TeacherDashboard = ({ setPage, assignments }) => {
  return (
    <>
      <div>
        TeacherDashboard
      </div>
      {assignments.length > 0
      ?
      <Grid container>
       { assignments.map(assignment => <Grid item>
          <Card
            key={assignment._id}>
            assignment.name
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