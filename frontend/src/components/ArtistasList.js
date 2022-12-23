import { Typography, useThemeProps } from "@mui/material";
import List from "@mui/material/List";
import { LISTA_ARTISTAS } from "../config";
import Artista from "./Artista";
import { Box } from "@mui/material";

const ArtistasList = (props) => {
  

  const artistas = LISTA_ARTISTAS.sort();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          marginTop: 20,
          marginLeft: 3
        }}
      >
        <Typography variant="h1" gutterBottom>
          Artistas
        </Typography>
      </Box>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {artistas.map((artista) => (
          <Artista onSelect={() => props.onSelect(artista)} key={artista} slugArtista={artista} />
        ))}
      </List>
    </>
  );
};

export default ArtistasList;
