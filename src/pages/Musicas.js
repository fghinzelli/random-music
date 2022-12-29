import React from 'react';
import Paper from '../components/Paper/Paper'
import { useParams } from 'react-router-dom'
import ListaMusicas from '../components/Musicas/ListaMusicas';
import Musica from '../components/Musicas/Musica';

const Musicas = () => {
    
    const { artist, music } = useParams();

    let breadcrumb = [
        {text: "Home", link: "/"},
        {text: "Artistas", link: "/artistas"},
        {text: artist, link: `/artistas/${artist}`}
    ]

    return (
        <Paper breadcrumb={breadcrumb} title="Musicas">
            { music ? <Musica musica={music} artista={artist} /> : <ListaMusicas artista={artist} /> }
        </Paper>
    )
}

export default Musicas;