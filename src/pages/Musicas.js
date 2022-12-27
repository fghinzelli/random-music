import React from 'react';
import Paper from '../components/Paper/Paper'
import { useParams } from 'react-router';
import ListaMusicas from '../components/Musicas/ListaMusicas';

const Musicas = () => {
    let breadcrumb = [
        {text: "Home", link: "/"},
        {text: "Musicas", link: "/musicas"}
    ]

    let { slug } = useParams();

    if (slug) {
        console.log(slug)
        // retorno = <MusicasArtista />
    }

    return (
        <Paper breadcrumb={breadcrumb} title="Musicas">
            <ListaMusicas artista={slug} />
        </Paper>
    )
}

export default Musicas;