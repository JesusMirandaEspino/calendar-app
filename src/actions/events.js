import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types"

export const eventStartAddNew = ( event ) => {
    return  async( dispatch ) => {

        try{

            const resp = await fetchConToken( 'events', event, 'POST' );
            const body = await resp.json();

            if( body.ok ){
                dispatch( eventsAddNew() );
            }

        }catch(error){
            console.log(error);
        }
    }


};

const eventsAddNew = (event) => ({
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

export const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventDeleted = ( ) => ({
    type: types.eventDeleted,
});