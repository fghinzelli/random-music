import React from 'react';
import Paper from '../components/Paper/Paper'
import ListaEstilos from '../components/Estilos/ListaEstilos'

const Artistas = () => {
    let breadcrumb = [
        {text: "Home", link: "/"},
        {text: "Estilos", link: "/Estilos"}
    ]
    
    return (
        <Paper breadcrumb={breadcrumb} title="Estilos">
            <ListaEstilos  /> 
        </Paper>
    )
}

export default Artistas;