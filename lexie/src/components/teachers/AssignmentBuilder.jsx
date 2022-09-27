import HomeButton from '../HomeButton.jsx';

const AssignmentBuilder = ({ setPage }) => {
  const handleSubmit = () => {

    setPage('teacher-dashboard');
  }

  return (
    <>
      <h1>Assignment Builder</h1>
      <HomeButton setPage={setPage} />
      <button onClick={handleSubmit}>Publish Assignment</button>
    </>
  )
}

export default AssignmentBuilder;