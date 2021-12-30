import React from 'react'

export const CalendarEvent = ( { event } ) => {

    const {title, user } = event;

    return (
        <div>
            <p>  <strong>{ title }</strong> </p>
            <p>{ user.name }</p>
        </div>
    )
}
