import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Services } from "../api.js";
import { Box, Typography } from "@mui/material";


const MusicasArtista = ({artista, onSelect}) => {
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    Services.songs(artista).then((response) => {
      setMusicas(response);
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          marginTop: 20,
          marginLeft: 3,
        }}
      >
        <Typography variant="h1" gutterBottom>
          Músicas
        </Typography>
      </Box>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {musicas.map(musica =>
        <ListItem key={musica.slug} disablePadding>
            <ListItemButton onClick={() => onSelect(musica)}>
            <ListItemAvatar>
                <Avatar alt={musica.name} src={"avatar.jpg"} />
            </ListItemAvatar>
            <ListItemText primary={musica.name} />
            </ListItemButton>
      </ListItem>
        )}
    </List>
    </>
  );
};

export default MusicasArtista;
