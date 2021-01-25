import React, {Component} from 'react';
// Componentes reutilizables
import Tarjeta from '../shared/tarjeta/Tarjeta';

class Heroes extends Component{
    render(){
        // Log de seguimiento
        console.log('HeroesComponent.js - Metodo render()');
        return(
            <div>
                <h1>Heroes <small>Marvel y DC</small></h1>
                <hr></hr>
                <Tarjeta></Tarjeta>
            </div>
        )
    }
}

export default Heroes;