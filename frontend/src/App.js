import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import ListData from './components/ListData';
import { Services }  from './api.js';

function App() {
  const [musicas, setMusicas] = useState([])

  useEffect(() => {
    Services.artists('legiao-urbana', false)
    .then(response => {
      console.log(response.data)
      //setMusicas(response.data)
    })
  }, [])

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          width: "100%",
          marginTop: 20
        }}
      >
        <ListData musicas={ musicas } />
        </Box>
    </Container>
  );
}

export default App;
