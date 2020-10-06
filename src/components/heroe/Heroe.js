import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// Datos a cargar
import customData from '../../data/heroes.json';
// Imagenes
import imgDc from '../../assets/img/dc.png';
import imgMarvel from '../../assets/img/marvel.png';

class Heroe extends Component{

    //Variables
    state = {
        heroe: customData
    }
    //----------------------------------------------------------------------//
    // Antes de renderizar, cargar el metodo                                //
    //----------------------------------------------------------------------//
    componentDidMount (){  
        // Log de seguimiento
        console.log("Heroe.js - Metodo componentWillMount");  

        this.getHeroe();
    }
    //----------------------------------------------------------------------//
    // Metodo getHeroe para obtener todos los Heroes                        //
    //----------------------------------------------------------------------//
    getHeroe = () => {
        // Log de seguimiento
        console.log("Heroe.js - Metodo getHeroe");

        var heroeNombre = this.props.match.params.nombre;
        for (let index = 0; index < customData.length; index++) {
            if (heroeNombre === customData[index].nombre){
                this.setState({
                    heroe: customData[index]
                });
            }
        }
    };     
    
    render(){
        // Log de seguimiento
        console.log('HeroeComponent.js - Metodo render()');

        var heroe = this.state.heroe;
        return(
            <div>
                <h1 className="animated fadeIn slow">{heroe.nombre} <small>( {heroe.aparicion} )</small></h1>
                <hr/>  
                <div className="row animated fadeIn slow">
                    <div className="col-md-4">
                        {heroe.nombre === 'Aquaman' &&
                                <img src={require('../../assets/img/aquaman.png')}  alt={heroe.nombre} title={heroe.nombre} className="img-fluid shadow"></img>
                        }
                        {heroe.nombre === 'Batman' &&
                                <img src={require('../../assets/img/batman.png')}  alt={heroe.nombre} title={heroe.nombre} className="img-fluid shadow"></img>
                        }
                        {heroe.nombre === 'Hulk' &&
                                <img src={require('../../assets/img/hulk.png')}  alt={heroe.nombre} title={heroe.nombre} className="img-fluid shadow"></img>
                        }    
                        {heroe.nombre === 'Daredevil' &&
                                <img src={require('../../assets/img/daredevil.png')}  alt={heroe.nombre} title={heroe.nombre} className="img-fluid shadow"></img>
                        }     
                        {heroe.nombre === 'Linterna Verde' &&
                                <img src={require('../../assets/img/linterna-verde.png')}  alt={heroe.nombre} title={heroe.nombre} className="img-fluid shadow"></img>
                        } 
                        {heroe.nombre === 'Spider-Man' &&
                                <img src={require('../../assets/img/spiderman.png')}  alt={heroe.nombre} title={heroe.nombre} className="img-fluid shadow"></img>
                        }    
                        {heroe.nombre === 'Wolverine' &&
                                <img src={require('../../assets/img/wolverine.png')}  alt={heroe.nombre} title={heroe.nombre} className="img-fluid shadow"></img>
                        }                                                                                                                                            
                        <br/><br/>
                        <Link to={`/heroes`} type="button" className="btn btn-4 btn-block" ><i>Volver</i></Link>
                    </div>
                    <div className="col-md-8">
                        <h3>{heroe.nombre}</h3>
                        <hr/>
                        <p>{heroe.bio}</p>
                        <div>
                            {heroe.casa === 'DC' &&
                                <img src={imgDc} title={heroe.casa} alt={heroe.casa} className="img-fluid" width="150" height="150"></img>
                            }
                            {heroe.casa === 'Marvel' &&
                                <img src={imgMarvel} title={heroe.casa} alt={heroe.casa} className="img-fluid" width="150" height="150"></img>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Heroe;