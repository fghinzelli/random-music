import React, { useContext } from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { useHistory } from 'react-router-dom';
import MusicContext from '../../store/music';

const ItemMusica = ({ artista, musica }) => {
  const musicCtx = useContext(MusicContext);
  const history = useHistory();

  const handleRedirect = (musica) => {
    musicCtx.setMusic(musica)
    history.push(`/artistas/${artista}/${musica.id}`)
  }

  return (
    <ListItem key={musica.slug} disablePadding>
        <ListItemButton onClick={() => handleRedirect(musica)}>
          <ListItemAvatar>
            <Avatar alt={musica.desc} src={"avatar.jpg"} />
          </ListItemAvatar>
          <ListItemText primary={musica.desc} />
        </ListItemButton>
      </ListItem>
  )
}

export default ItemMusica;