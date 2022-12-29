import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Artistas from './pages/Artistas';
import Musicas from './pages/Musicas';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={ Home } path="/" exact />
                <Route component={ Musicas } path="/artistas/:artist/:music" />
                <Route component={ Musicas } path="/artistas/:artist" />
                <Route component={ Artistas } path="/artistas" />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;