import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import ListData from './components/ListData';
// import { Services }  from './api.js';

function App() {
  useEffect(() => {
    
  }, [])

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          width: "100%",
          marginTop: 20
        }}
      >
        <ListData />
        </Box>
    </Container>
  );
}

export default App;
