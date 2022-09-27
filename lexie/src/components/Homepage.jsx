const Homepage = ({ students }) => {
  return (
    <div>
      <div>Teacher</div>
      {students.map(student => {
        return <div key={student._id}>{student.name}</div>
      })}
    </div>
  )
}

export default Homepage;