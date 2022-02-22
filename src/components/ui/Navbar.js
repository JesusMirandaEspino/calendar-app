import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const { name  } = useSelector( state => state.name );
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (

        <div className = "navbar navbar-dark bg-dark mb-4" >

            <span className="navbar-brand">
                <p>{{ name }}</p>
            </span>

            <button onClick={ handleLogout }   className="btn btn-outline-danger">
                <i className="fas fa-sign-alt" ></i>
                <span> Salir</span>
            </button>

        </div>
    )
}