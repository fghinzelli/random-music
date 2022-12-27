
import List from "@mui/material/List";
import { LISTA_ARTISTAS } from "../../config";
import ItemArtista from "./ItemArtista";

const ListaArtistas = (props) => {
  const artistas = LISTA_ARTISTAS.sort();

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
