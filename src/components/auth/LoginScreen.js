import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';
import Swal from 'sweetalert2';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formLoginValues, handleInputChange ] = useForm( {
        lEmail: 'jesusm@gmail.com',
        lpassword: '123456'
    });

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        rname: 'Jesus',
        rEmail: 'jesusm@gmail.com',
        rpassword1: '123456',
        rpassword2: '123456'
    });

    const  { rname,  rEmail, rpassword1, rpassword2 } = formRegisterValues;


    const { lEmail, lpassword } = formLoginValues;

    const handleLogin = () => {
        e.preventDefault();
        dispatch( startLogin( lEmail, lpassword ) );
    }

    const handleRegister = () => {
        e.preventDefault();
        if( rpassword1 != rpassword2 ){
            Swal.fire( 'Error', 'Las contraseñas deben de ser iguales' );
        }

        dispatch( startRegister( rEmail, rpassword1, rname) );
        
    }



    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ handleLogin } >
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value="lEmail"
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lpassword"
                                value="lpassword"
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister} >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="rname"
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="rEmail"
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="rpassword1"
                                placeholder="Contraseña"
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="rpassword2"
                                placeholder="Repita la contraseña"
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}