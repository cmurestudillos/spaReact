import React, {Component} from 'react';
import {Card, CardColumns} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Datos a cargar
import customData from '../../../data/heroes.json';

class Tarjeta extends Component{
    //Variables
    state = {
        heroes: customData
    }

    //----------------------------------------------------------------------//
    // Antes de renderizar, cargar el metodo                                //
    //----------------------------------------------------------------------//
    componentDidMount (){  
        // Log de seguimiento
        console.log("Tarjeta.js - Metodo componentWillMount");  

        this.getHeroes();
    }

    //----------------------------------------------------------------------//
    // Metodo getHeroes para obtener todos los Heroes                       //
    //----------------------------------------------------------------------//
    getHeroes = () => {
        // Log de seguimiento
        console.log("Tarjeta.js - Metodo getHeroes");
    };  

    render(){
        // Log de seguimiento
        console.log('Tarjeta.js - Metodo render()');
        
        if(this.state.heroes.length >= 1){
            var listarHeroes = this.state.heroes.map( (heroe) => {
            return(
                <Card className="card shadow animated fadeIn slow" key={heroe.nombre}>
                    <Card.Img className="card-img-top border-0" src={ require('../../../assets/img/' + heroe.img) } />
                    <Card.Body>
                        <Card.Title>{heroe.nombre}</Card.Title>
                        <Card.Text>{heroe.bio}</Card.Text>
                        <Card.Text><small className="text-muted"><strong>Año:</strong> {heroe.aparicion}</small></Card.Text>
                        <Link to={`/heroe/${heroe.nombre}`} className="btn btn-4 btn-block" >Ver mas...</Link>
                    </Card.Body>                
                </Card>
            );
        });

        return(
            <CardColumns>
                {listarHeroes}
            </CardColumns>
        );}
    }
}

export default Tarjeta;