import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { getSongs } from "../service/music";
import {
  Typography,
  LinearProgress,
  Card,
  CardContent,
  Breadcrumbs,
  Link,
} from "@mui/material";

const MusicasArtista = ({ artista, onSelect, returnCommand }) => {
  const [musicas, setMusicas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSongs(artista.slug).then((musics) => {
      setMusicas(musics);
      setLoading(false);
    });
  }, []);

  let musicList = null;

  if (musicas) {
    musicList = musicas.map((musica) => (
      <ListItem key={musica.slug} disablePadding>
        <ListItemButton onClick={() => onSelect(musica)}>
          <ListItemAvatar>
            <Avatar alt={musica.name} src={"avatar.jpg"} />
          </ListItemAvatar>
          <ListItemText primary={musica.name} />
        </ListItemButton>
      </ListItem>
    ));
  }

  return (
    <>
      <Typography
        sx={{
          width: "100%",
          marginTop: 20,
          marginLeft: 3,
        }}
        variant="h3"
        gutterBottom
      >
        Músicas
      </Typography>
      <Breadcrumbs
        sx={{
          margin: 3
        }} 
        aria-label="breadcrumb">
        <Link underline="hover" color="inherit" onClick={returnCommand}>
          Artistas
        </Link>
        <Typography color="text.primary">{artista.name}</Typography>
      </Breadcrumbs>
      <Card elevation={5}>
        <CardContent>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {loading ? <LinearProgress /> : musicList}
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default MusicasArtista;
