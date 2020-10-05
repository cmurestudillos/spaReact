import React from 'react';
// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
// Rutas
import Router from './routes/Router';
// Componentes Comunes
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";

function App() {
  return (
    <div>
      {/* Cabecera */}
      <Header />  
        <div className="container main-container"> 
          <Router />  
        </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
