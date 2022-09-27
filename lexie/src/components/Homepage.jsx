import TeacherDashboard from './teachers/TeacherDashboard.jsx';

const Homepage = ({ students, setPage }) => {
  return (
    <div>
      <button onClick={() => setPage('teacher-dashboard')}>Teacher</button>
      {students.map(student => {
        return <button key={student._id}>{student.name}</button>
      })}
    </div>
  )
}

export default Homepage;