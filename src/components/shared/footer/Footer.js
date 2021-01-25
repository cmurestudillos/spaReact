import React, {Component} from 'react';

class Footer extends Component{
    render(){
        // Log de seguimiento
        console.log('FooterComponent.js - Metodo render()');
        return(
            <div className="footer bg-custom">
                <p><i>Copyright &copy; - Carlos Mur</i></p>
            </div>            
        )
    }
}

export default Footer;

   
