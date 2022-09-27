import HomeButton from '../HomeButton.jsx';
import { Button, Card, Grid, CardMedia, CardContent } from '@mui/material';

const randomImg = require('../../assets/randomImg.js')

const StudentDashboard = ({ student, setPage, assignments }) => {
  return (
    <>
      <h1>
        Hi {student.name}!
      </h1>
      <h3>
        Select an assignment below to get started!
      </h3>
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
              // later: get a list view
                component='img'
                style={{
                  height: 140,
                  width: 210
                }}
                image={assignment.image || randomImg()}
              />
              <CardContent>
                {assignment.title}
              </CardContent>
          </Card>
        </Grid>)}
      </Grid>
      :
      <div>It looks like you have no assignments!</div>
      }
      <HomeButton setPage={setPage} />
    </>
  )
}

export default StudentDashboard;