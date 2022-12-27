import { Typography, Card, CardContent } from "@mui/material";
import List from "@mui/material/List";
import { LISTA_ARTISTAS } from "../config";
import Artista from "./Artista";

const ArtistasList = (props) => {
  const artistas = LISTA_ARTISTAS.sort();

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
        Artistas
      </Typography>
      <Card elevation={5}>
        <CardContent>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {artistas.map((artista) => (
              <Artista
                onSelect={(artist, slug) => props.onSelect(artist, slug)}
                key={artista}
                slugArtista={artista}
              />
            ))}
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default ArtistasList;
