import React, {Component} from 'react';
// Rutas
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// Componentes compartidos
import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";
// Componente de pruebas/maquetacion, comentar despues de formado el BackEnd
import Heroes from '../components/heroes/Heroes';

class Router extends Component{
    //----------------------------------------------------------------------//
    // Metodo render()                                                      //
    //----------------------------------------------------------------------//
    render(){
        // Log de seguimiento
        console.log('RouterComponent - Metodo render()');

        return(
            <BrowserRouter>
                {/* Cabecera */}
                <Header />  

                {/* Configuracion de rutas y paginas */}
                <Switch>
                    <Route exact path="/" component={Heroes} />
                    <Route exact path="/heroes" component={Heroes} />
                </Switch>

                {/* Footer */}
                <Footer />

            </BrowserRouter>
        );
    }
}

export default Router;