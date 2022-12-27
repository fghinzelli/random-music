import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import ArtistasList from "./components/ArtistasList";
import MusicasArtista from "./components/MusicasArtista";

function App() {
  const [selectedArtist, setSelectedArtist] = useState(null);

  const handleSelectArtist = (artist, slug) => {
    setSelectedArtist({...artist, slug: slug});
  };

  const handleSelectMusic = (music) => {
    console.log(music);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          width: "100%",
          marginTop: 20,
        }}
      >
          {selectedArtist ? (
            <MusicasArtista
              returnCommand={() => setSelectedArtist(null)}
              artista={selectedArtist}
              onSelect={handleSelectMusic}
            />
          ) : (
            <ArtistasList onSelect={handleSelectArtist} />
          )}
      </Box>
    </Container>
  );
}

export default App;
