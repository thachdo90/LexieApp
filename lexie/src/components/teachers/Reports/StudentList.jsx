import { Grid, Paper } from '@mui/material';

const StudentList = ({ report, studentFilter, setStudentFilter }) => {
  return (
    <Paper
      elevation='3'
      style={{
        width: 200,
        padding: 20,
        backgroundColor: 'hsl(210, 100%, 90%)'}}
      >
      <h1>Students</h1>
      <h3>Completed</h3>
      {/* iterating 4 times total but class size usually 35 max */}
      {report.filter(work => work.completed === true)
        .map(work => <p
        key={work.studentId}
        className={studentFilter === work.studentId ? 'active hover' : 'hover'}
        onClick={(() => {
          studentFilter === work.studentId
          ?
          setStudentFilter('none')
          :
          setStudentFilter(work.studentId)
        })}
        >{work.name}</p>)}
        <h3>Not yet started</h3>
        {report.filter(work => work.completed === false)
          .map(work => <p key={work.studentId}>{work.name}</p>)}
     </Paper>
  )
}

export default StudentList;