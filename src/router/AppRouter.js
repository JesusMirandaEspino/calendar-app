import React, { useEffect } from 'react'
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import {
    BrowserRouter,
    Routes,
    Redirect,
    Route
} from "react-router-dom";

import { useDispatch } from 'react-redux';
import { startCheking } from '../actions/auth';

export const AppRouter = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startCheking );
    }, [])
    

    return (
    <BrowserRouter>
            <Routes>
                <Route  exact path="/login"  element={ <LoginScreen />  } />
                <Route  exact path="/"  element={ <CalendarScreen /> } />
            </Routes>
    </BrowserRouter>
    )
}
