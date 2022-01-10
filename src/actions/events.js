import { types } from "../types/types"


export const eventsAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const eventsSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = () => ({
    type: types.eventClearActiveEvent,
});