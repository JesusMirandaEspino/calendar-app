import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar } from '../ui/Navbar';

export const CalendarScreen = () => {

    const localizer = momentLocalizer(moment);

    const myEventsList = [{

        title: 'cumpleaños de mi esposita',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        bgcolor: '#fafafa'

    }];

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
            localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />

        </div>
    )
}
