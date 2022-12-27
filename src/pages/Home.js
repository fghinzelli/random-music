import React from 'react';
import Paper from '../components/Paper/Paper'
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemButton } from "@mui/material";

const Home = () => {
    let breadcrumb = [
        {text: "Home", link: "/"},
    ]
    return (
        <Paper breadcrumb={breadcrumb} title="Music Library">
            <List>
                <ListItem>
                    <ListItemButton>
                        <Link style={{textDecoration: 'none'}} to="/artistas">Artistas</Link>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <Link style={{textDecoration: 'none'}} to="/musicas">Musicas</Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </Paper>


        //     {/* {selectedArtist ? (
        //         <MusicasArtista
        //         returnCommand={() => setSelectedArtist(null)}
        //         artista={selectedArtist}
        //         onSelect={handleSelectMusic}
        //         />
        //     ) : (
        //         <ArtistasList onSelect={handleSelectArtist} />
        //     )} */}

    )
}

export default Home;