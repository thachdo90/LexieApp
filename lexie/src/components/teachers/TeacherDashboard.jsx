import HomeButton from '../HomeButton.jsx';
import { Button } from '@mui/material';

const TeacherDashboard = ({ setPage, assignments }) => {
  return (
    <>
      <div>
        TeacherDashboard
      </div>
      {assignments.length > 0
      ?
      assignments.map(assignment => <div key={assignment._id}>
        assignment.name
      </div>)
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