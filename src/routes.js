import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Artistas from './pages/Artistas';
import Musicas from './pages/Musicas';
import Estilos from './pages/Estilos';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={ Home } path="/" exact />
                <Route component={ Estilos } path="/estilos" />
                <Route component={ Musicas } path="/artistas/:artist/:music" />
                <Route component={ Musicas } path="/artistas/:artist" />
                <Route component={ Artistas } path="/artistas" />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;