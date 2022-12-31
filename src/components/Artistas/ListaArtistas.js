
import React from 'react';
import List from "@mui/material/List";
import { LISTA_ARTISTAS, ESTILOS } from "../../config";
import ItemArtista from "./ItemArtista";
import { useLocation } from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ListaArtistas = ({estilo}) => {
  let query = useQuery();
  // let artistas = LISTA_ARTISTAS
  let artistas = [] 
  Object.keys(ESTILOS).map(item => {
    artistas = artistas.concat(ESTILOS[item])
  })
  artistas = artistas.sort()
  console.log(artistas)
  let q = query.get("estilo")
  if (q) {
    artistas = ESTILOS[q].sort()
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
