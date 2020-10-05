import React, {Component} from 'react';
// Rutas
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// Componentes compartidos
import Heroes from '../components/heroes/Heroes';
import Heroe from '../components/heroe/Heroe';

class Router extends Component{
    //----------------------------------------------------------------------//
    // Metodo render()                                                      //
    //----------------------------------------------------------------------//
    render(){
        // Log de seguimiento
        console.log('RouterComponent - Metodo render()');

        return(
            <BrowserRouter>
                {/* Configuracion de rutas y paginas */}
                <Switch>
                    <Route exact path="/" component={Heroes} />
                    <Route exact path="/heroes" component={Heroes} />
                    <Route exact path="/heroe/:nombre" component={Heroe} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;