import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-es';

import { Navbar } from '../ui/Navbar';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpeniModal } from '../../actions/ui';
import { eventsSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';

    moment.locale('es');

    const localizer = momentLocalizer(moment);

    const myEventsList = [{

        title: 'cumpleaños de mi esposita',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        bgcolor: '#fafafa',
        notes: 'Comprar el pastel',
        user: {
            _id: '1234',
            name: 'Jesus'
        }

    }];

export const CalendarScreen = () => {

    const dispath = useDispatch();
    const { events } = useSelector( state => state.calendar );



    const [ lastView, setLastView ] = useState( localStorage.getItem('lastView')  || 'month' );

    const onDoubleClick = (e) => {
        dispath( uiOpeniModal() );
    }


    const onSelectEvent = (e) => {

        dispath( eventsSetActive(e) );
        dispath( uiOpeniModal() );
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = ( event, start, end, isSeleted ) => {

    const style = {
        backgroundColor: '#367cf7',
        borderRadius: '0px',
        opacity: 0.8,
        display: 'block',
        color: 'white',

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
                events={ events }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                messages={messages}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                view={ lastView }
                eventPropGetter={ eventStyleGetter }
                components={{ event: CalendarEvent }}
            />

            <AddNewFab />
            <CalendarModal />

        </div>
    )
}
