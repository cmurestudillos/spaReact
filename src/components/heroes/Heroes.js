import React, {Component} from 'react';

class Heroes extends Component{
    render(){
        // Log de seguimiento
        console.log('HeroesComponent.js - Metodo render()');
        return(
            <div><h1>Listado de Heroes</h1></div>
        )
    }
}

export default Heroes;