import { fetchSinToken, fetchConToken } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from 'sweetalert2';
import { eventLogout } from "./events";

export const startLogin = ( email, password ) => {
    return async( dispatch ) => {

        const resp =  await fetchSinToken( 'auth',  { email, password }, 'POST' );
        const body = await resp.json();

        if( body.ok ){
            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-time', new Date().getTime() );

            dispatch( login( {
                uid: body.uid,
                name: body.name
            }));

        }else{
            Swal.fire( 'Error', body.msg, 'error' );
        } 
    }
}


export const startRegister = ( email, password, name ) => {
    return async( dispatch ) => {

        const resp =  await fetchSinToken( 'auth/new',  { email, password, name }, 'POST' );
        const body = await resp.json();

        if( body.ok ){
            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-time', new Date().getTime() );

            dispatch( login( {
                uid: body.uid,
                name: body.name
            }));

        }else{
            Swal.fire( 'Error', body.msg, 'error' );
        } 
    }
}


export const startCheking = (  email, password, name ) =>  {
    return async( dispatch ) => {

        const resp =  await fetchConToken( 'auth/renew',  { email, password, name }, 'GET' );
        const body = await resp.json();

        if( body.ok ){
            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-time', new Date().getTime() );

            dispatch( login( {
                uid: body.uid,
                name: body.name
            }));

        }else{
            Swal.fire( 'Error', body.msg, 'error' );
            dispatch( chekingFinish );
        } 
    }
}


const chekingFinish = () => ({ type: types.authChekingFinish });


const login = ( user ) => ({
    type: types.authLogin,
    payload: user

});

export const startLogout = () => {
    return ( dispatch ) => {
        localStorage.clear();
        dispatch( eventLogout() );
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout });

