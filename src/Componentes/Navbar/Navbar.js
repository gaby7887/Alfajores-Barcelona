import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'> Inicio </Link>
                </li>
                <li>
                    <Link to='/Producto'> Producto </Link>
                </li>
                <li>
                    <Link to='/Franquicia'> Franquicia </Link>
                </li>
                <li>
                    <Link to='/Contacto'> Contacto </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;