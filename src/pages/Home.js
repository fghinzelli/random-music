import React from "react";
import Paper from "../components/Paper/Paper";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemButton } from "@mui/material";

const Home = () => {
  let breadcrumb = [{ text: "Home", link: "/" }];
  return (
    <Paper breadcrumb={breadcrumb} title="Music Library">
      <List>
        <ListItem>
          <ListItemButton>
            <Link style={{ textDecoration: "none" }} to="/estilos">
              Estilos
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link style={{ textDecoration: "none" }} to="/artistas">
              Artistas
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  );
};

export default Home;
