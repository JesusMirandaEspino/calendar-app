import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const estado = useSelector( state => state );
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
    }

console.log( estado );

    return (

        <div className = "navbar navbar-dark bg-dark mb-4" >

            <span className="navbar-brand">
                <p>Nombre</p>
            </span>

            <button onClick={ handleLogout }   className="btn btn-outline-danger">
                <i className="fas fa-sign-alt" ></i>
                <span> Salir</span>
            </button>

        </div>
    )
}