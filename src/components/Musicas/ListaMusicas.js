import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { getSongs } from "../../service/music";
import {
  LinearProgress,
} from "@mui/material";

const ListaMusicas = ({ artista, onSelect, returnCommand }) => {
  const [musicas, setMusicas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSongs(artista).then((musics) => {
      setMusicas(musics);
      setLoading(false);
    });
    // eslint-disable-next-line
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
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {loading ? <LinearProgress /> : musicList}
      </List>
    </>
  );
};

export default ListaMusicas;
