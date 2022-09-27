import HomeButton from './HomeButton.jsx';
const Homepage = ({ students, setPage }) => {
  return (
    <div>
      <button onClick={() => setPage('teacher-dashboard')}>Teacher</button>
      {students.map(student => {
        return <button key={student._id}>{student.name}</button>
      })}
      <HomeButton setPage={setPage} />
    </div>
  )
}

export default Homepage;