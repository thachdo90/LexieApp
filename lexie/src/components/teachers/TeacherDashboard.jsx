import HomeButton from '../HomeButton.jsx';

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
      <button onClick={() => setPage('assignment-builder')}>Create Assignment</button>
      <HomeButton setPage={setPage} />
    </>
  )
}

export default TeacherDashboard;