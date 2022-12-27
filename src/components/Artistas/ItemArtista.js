import React, { useEffect, useState } from "react";
import { ListItem, ListItemAvatar, ListItemButton, ListItemText, Skeleton, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { getArtist } from "../../service/music";
import { VAGALUME_URL } from "../../config";
import { useHistory } from 'react-router-dom';

const Artista = ({ slugArtista, onSelect }) => {
  const [artista, setArtista] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();


  useEffect(() => {
    setLoading(true);
    getArtist(slugArtista, true)
    .then((dadosArtista) => {
      setArtista({...dadosArtista, slug: slugArtista});
      setLoading(false);
    })
    .catch(error => {
      setLoading(false);
    })
    // eslint-disable-next-line
  }, []);

  const handleRedirect = () => {
    history.push(`/artistas/${artista.slug}`)
  }

  return (
    <>
        <ListItem key={artista ? artista.slug : null}>
          <ListItemButton onClick={!loading ? handleRedirect : null}>
            <ListItemAvatar>
              { loading ? <Skeleton animation="wave" variant="circular" width={40} height={40} /> : <Avatar alt={artista.name} src={`${VAGALUME_URL}/${artista.imgUrl}`} /> }
            </ListItemAvatar>
              { loading ? <Box sx={{ width: '80%' }}><Skeleton animation="wave" heigth={10} /></Box> :<ListItemText primary={artista.name} /> }
          </ListItemButton>
        </ListItem>
    </>
  )
};

export default Artista;
