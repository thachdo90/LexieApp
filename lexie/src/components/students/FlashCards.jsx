import React, { useState, useEffect } from 'react';
import { Card, Box, Grid, CardContent } from '@mui/material';
import { ArrowForwardIos, ArrowBackIos, ImportContacts } from '@mui/icons-material/';

const node = require('./sampleFlashcards.js')

const FlashCards = () => {
  const [currentCard, setCurrentCard] = useState(node);
  const [showDefinition, setShowDefinition] = useState(false);

  const nextCard = () => {
    hideDef();
    setCurrentCard(currentCard.next)
  };
  const prevCard = () => {
    hideDef();
    setCurrentCard(currentCard.prev)
  };
  const showDef = () => setShowDefinition(true);
  const hideDef = () => setShowDefinition(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box
    sx={style}>
      <Grid
        container
        direction='column'
        justifyContent='flex-start'
        alignItems='center'>
        <Grid item style={{width:'100%'}} textAlign='center'>
          <Card style={{backgroundColor: 'hsl(210,79%,46%)', color: 'white', fontSize: '40px'}}>
            <CardContent>
              <span>{currentCard.card.word}</span>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          container
          justifyContent='center'
          style={{margin: '10px', color: '#4F4F4F'}}>
          <div onClick={() => prevCard()}>
            <ArrowBackIos fontSize='large' />
          </div>
          <span onClick={() => showDef()}><ImportContacts fontSize='large' />
          </span>
          <div onClick={() => nextCard()}>
            <ArrowForwardIos fontSize='large' />
          </div>
        </Grid>
      { showDefinition &&
          <p>
            {currentCard.card.definition}
          </p>}
      </Grid>
    </Box>
  )

}

export default FlashCards;