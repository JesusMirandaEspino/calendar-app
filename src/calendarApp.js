import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { CalendarScreen } from './components/calendar/CalendarScreen';


export const CalendarApp = () => {
    return (
        <Provider store={store}>
            <CalendarScreen />
        </Provider>
    )
}
