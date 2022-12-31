
import React from 'react';
import List from "@mui/material/List";
import { LISTA_ARTISTAS } from "../../config";
import ItemArtista from "./ItemArtista";
import { useLocation } from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ListaArtistas = ({estilo}) => {
  let query = useQuery();
  let artistas = LISTA_ARTISTAS
  let q = query.get("estilo")
  console.log(q)
  if (q) {
    artistas = artistas[q].sort()
  } else {
    artistas = artistas.sort()
  }

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {artistas.map((artista) => (
        <ItemArtista
          key={artista}
          slugArtista={artista}
        />
      ))}
    </List>
  );
};

export default ListaArtistas;
