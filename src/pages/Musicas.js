import React from 'react';
import Paper from '../components/Paper/Paper'

const Musicas = () => {
    let breadcrumb = [
        {text: "Home", link: "/"},
        {text: "Musicas", link: "/musicas"}
    ]
    return (
        <Paper breadcrumb={breadcrumb} title="Musicas">

        </Paper>
    )
}

export default Musicas;