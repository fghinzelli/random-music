import React, { useEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Services } from "../api.js";
import { VAGALUME_URL } from "../config.js";

const Artista = ({ slugArtista, onSelect }) => {
  const [artista, setArtista] = useState(null);

  useEffect(() => {
    Services.artists(slugArtista, true).then((response) => {
      setArtista(response);
    });
  }, []);

  let itemArtista = null;

  if (artista) {
    itemArtista = (
      <ListItem key={artista.slug}>
        <ListItemButton onClick={() => onSelect(artista, slugArtista)}>
          <ListItemAvatar>
            <Avatar alt={artista.name} src={`${VAGALUME_URL}/${artista.imgUrl}`} />
          </ListItemAvatar>
          <ListItemText primary={artista.name} />
        </ListItemButton>
      </ListItem>
    );
  }

  return itemArtista;
};

export default Artista;
