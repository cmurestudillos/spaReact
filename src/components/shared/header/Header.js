import React, {Component} from 'react';
// Componentes Bootstrap
import {Navbar, Nav} from 'react-bootstrap';
// Imagenes
import logo from '../../../assets/img/A-64.png';

class Header extends Component{
    render(){
        // Log de seguimiento
        console.log('NavbarComponent.js - Metodo render()');
        return(
          <div>
            <Navbar toggleable="lg" type="light" variant="light" className="navbar navbar-expand-lg navbar-dark bg-custom">
              <Navbar.Brand href="/">
                <img src={logo} alt="Logo" title="Logo" width="30" height="30" />
              </Navbar.Brand>
              <Nav.Link href="/Heroes" className="active" >Heroes</Nav.Link>
            </Navbar>        
          </div>
        )
    }
}

export default Header;