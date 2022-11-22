import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Componentes/Navbar/Navbar';


import Inicio from './Componentes/Views/Inicio/Inicio';
import AcercaDe from './Componentes/Views/AcercaDe/AcercaDe';
import Producto from './Componentes/Views/Producto/Producto';
import Franquicia from './Componentes/Views/Franquicia/Franquicia';
import Contacto from './Componentes/Views/Contacto/Contacto';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/AcercaDe' element={<AcercaDe />} />
        <Route path='/Producto' element={<Producto/>} />
        <Route path='/Franquicia' element={<Franquicia/>} />
        <Route path='/Contacto' element={<Contacto/>} />
      </Routes>
    </Router>
  );
}

export default App;
