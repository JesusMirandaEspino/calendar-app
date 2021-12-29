import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-es';

import { Navbar } from '../ui/Navbar';

    moment.locale('es');

    const localizer = momentLocalizer(moment);

    const myEventsList = [{

        title: 'cumpleaños de mi esposita',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        bgcolor: '#fafafa'

    }];

export const CalendarScreen = () => {

    const eventStyleGetter = ( event, start, end, isSeleted ) => {

    const style = {
        backgroundColor: '#367cf7',
        borderRadius: '0px',
        opacity: 0.8,
        display: 'block',
        color: 'white'
    }

    return {
        style
    } 

    };

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
            localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                messages={messages}
                eventPropGetter={ eventStyleGetter }
            />

        </div>
    )
}
