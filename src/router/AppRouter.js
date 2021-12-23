import React from 'react'
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import {
    BrowserRouter,
    Routes,
    Redirect,
    Route
} from "react-router-dom";

export const AppRouter = () => {
    return (
    <BrowserRouter>
            <Routes>
                <Route  exact path="/login"  element={ <LoginScreen />  } />
                <Route  exact path="/"  element={ <CalendarScreen /> } />
            </Routes>
    </BrowserRouter>
    )
}
