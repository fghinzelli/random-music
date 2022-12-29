import React from 'react';
import Paper from '../components/Paper/Paper'
import ListaArtistas from '../components/Artistas/ListaArtistas'

const Artistas = () => {
    let breadcrumb = [
        {text: "Home", link: "/"},
        {text: "Artistas", link: "/artistas"}
    ]
    
    return (
        <Paper breadcrumb={breadcrumb} title="Artistas">
            <ListaArtistas /> 
        </Paper>
    )
}

export default Artistas;