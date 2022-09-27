import HomeButton from '../HomeButton.jsx';
import { Button } from '@mui/material';

const AssignmentBuilder = ({ setPage }) => {
  const handleSubmit = () => {

    setPage('teacher-dashboard');
  }

  return (
    <>
      <h1>Assignment Builder</h1>
      <HomeButton setPage={setPage} />
      <Button
        onClick={handleSubmit}
        variant='contained'
        color='primary'>
        Publish Assignment
      </Button>
    </>
  )
}

export default AssignmentBuilder;