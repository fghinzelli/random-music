import React from "react";
import List from "@mui/material/List";
import { ESTILOS } from "../../config"; 
import { useHistory } from 'react-router-dom';
import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";

const ListaEstilos = (props) => {
  const estilos = ESTILOS;
  const history = useHistory();

  const handleSelectStyle = (estilo) => {
    history.push(`/artistas?estilo=${estilo}`)

  }
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {Object.keys(estilos).sort().map((estilo, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton onClick={() => handleSelectStyle(estilo)}>
            <ListItemAvatar>
              <Avatar alt={estilo} src={"avatar.jpg"} />
            </ListItemAvatar>
            <ListItemText primary={estilo} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ListaEstilos;
