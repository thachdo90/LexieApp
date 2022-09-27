import { Button, ButtonGroup } from '@mui/material';

const Homepage = ({ students, setPage }) => {
  return (
    <div>
      <Button
        onClick={() => setPage('teacher-dashboard')}
        variant="contained"
        color="primary">
        Teacher
      </Button>
      {/* {students.map(student => {
        return <button key={student._id}>{student.name}</button>
      })} */}
      <ButtonGroup
        variant="contained"
        color="secondary">
        {students.map(student => <Button key={student._id}>
          {student.name}
        </Button>)}
      </ButtonGroup>
    </div>
  )
}

export default Homepage;