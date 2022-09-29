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
      <div onClick={() => prevCard()}>
        <ArrowBackIos />
      </div>
      <div onClick={() => nextCard()}>
        <ArrowForwardIos />
      </div>
      <Card>
        <CardContent>
          <h1>
            <span onClick={() => showDef()}><ImportContacts fontSize='large' /></span>   {currentCard.card.word}
          </h1>
        </CardContent>
      </Card>
     { showDefinition &&
        <Card>
          {currentCard.card.definition}
        </Card>}
    </Box>
  )

}

export default FlashCards;