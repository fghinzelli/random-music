import React, { useContext } from 'react';
import Paper from '../components/Paper/Paper'
import { useParams } from 'react-router-dom'
import ListaMusicas from '../components/Musicas/ListaMusicas';
import Musica from '../components/Musicas/Musica';
import MusicContext from '../store/music'

const Musicas = () => {
    const { artist, music } = useParams();
    const musicCxt = useContext(MusicContext)
    
    let breadcrumb = [
        { text: "Home", link: "/" },
        { text: "Artistas", link: "/artistas" },
        { text: musicCxt.artist.name, link: `/artistas/${musicCxt.artist.slug}` }
    ]

    let content = null
    if (music) {
        content = <Musica artista={musicCxt.artist} musica={musicCxt.music} />
    } else {
        content = <Paper breadcrumb={breadcrumb} title={musicCxt.artist.name}>
            <ListaMusicas artista={artist} />
        </Paper>
    }

    return content 
}

export default Musicas;