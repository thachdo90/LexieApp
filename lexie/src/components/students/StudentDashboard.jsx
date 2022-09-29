import { Button, Modal, Card, Grid, CardMedia, CardContent } from '@mui/material';
import FlashCards from './FlashCards.jsx';
import React, { useState } from 'react';

const randomImg = require('../../assets/randomImg.js')

const StudentDashboard = ({ student, setPage, assignments, setCurrentAssignment }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant='contained'>
        FlashCards
      </Button>
      <Modal
        open={open}
        onClose={handleClose}>
        <FlashCards />
      </Modal>
      <h1>
        Hi {student.name}!
      </h1>
      <h3>
        Select an assignment below to get started!
      </h3>
      {assignments.length > 0
      ?
      <Grid
      container
      spacing='10'>
       { assignments.map(assignment => <Grid item>
          <Card
            // make card respond to hover
            key={assignment._id}
            raised={true}
            onClick={() => {
              setPage('student-assignment')
              setCurrentAssignment(assignment._id)
            }}>
              <CardMedia
              // later: get a list view
                component='img'
                style={{
                  height: 140,
                  width: 210
                }}
                image={assignment.image || randomImg()}
              />
              <CardContent>
                {assignment.title}
              </CardContent>
          </Card>
        </Grid>)}
      </Grid>
      :
      <div>It looks like you have no assignments!</div>
      }
    </>
  )
}

export default StudentDashboard;