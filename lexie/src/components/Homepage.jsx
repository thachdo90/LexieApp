import { Button, ButtonGroup } from '@mui/material';

const Homepage = ({ students, setPage, setUser }) => {
  return (
    <div>
      <Button
        onClick={() => {
          setUser('teacher');
          setPage('teacher-dashboard');
        }}
        variant="contained"
        color="primary">
        Teacher
      </Button>
      <ButtonGroup
        variant="contained"
        color="secondary">
        {students.map(student => <Button
        key={student._id}
        student={student}
        onClick={() => {
          setUser(student._id)
          setPage('student-dashboard')
        }}>
          {student.name}
        </Button>)}
      </ButtonGroup>
    </div>
  )
}

export default Homepage;