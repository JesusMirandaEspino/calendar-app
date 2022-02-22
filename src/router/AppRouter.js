import React, { useEffect } from 'react'
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import {
    BrowserRouter,
    Routes,
    Redirect,
    Route
} from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { startCheking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRouter } from './PrivateRouter';

export const AppRouter = () => {


    const dispatch = useDispatch();
    const { cheking, uid } = useSelector( state => state.auth );

    useEffect(() => {
        dispatch( startCheking );
    }, [dispatch]);

    if( cheking ){
        return (<h5>Espere...</h5>)
    }
    

    return (
    <BrowserRouter>
            <Routes>
                <PublicRoute isAuthenticated={ !!uid } exact path="/login"  element={ <LoginScreen />  } />
                <PrivateRouter  exact path="/"  element={ <CalendarScreen /> } sAuthenticated={ !!uid } />
            </Routes>
    </BrowserRouter>
    )
}
