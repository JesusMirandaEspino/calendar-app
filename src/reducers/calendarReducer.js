import moment from "moment";
import { types } from "../types/types";



const initialState = {
    events: [
        {
            title: 'cumpleaños de mi esposita',
            start: moment().toDate(),
            end: moment().add(2, 'hours').toDate(),
            bgcolor: '#fafafa',
            notes: 'Comprar el pastel',
            user: {
                id: '1234',
                name: 'Jesus'
            }
        }
    ],

    activeEvents: null
};


export const calendarReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.eventSetActive:
            return {
                ...state,
                activeEvents: action.payload
            }

        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }

        default:
            return state;
        }
}