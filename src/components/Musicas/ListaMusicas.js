import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import { getArtist } from "../../service/music";
import {
  LinearProgress,
} from "@mui/material";
import ItemMusica from "./ItemMusica";

const ListaMusicas = ({ artista }) => {
  const [musicas, setMusicas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArtist(artista, true).then(response => {
      let m = response.topLyrics
      setMusicas(m);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  let musicList = null;

  if (musicas) {
    musicList = musicas.map((musica) => (
      <ItemMusica key={musica.id} artista={artista} musica={musica}/>
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
