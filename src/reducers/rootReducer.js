import { combineReducers } from 'redux';
import { authReducer } from './authreducer';
import { calendarReducer } from './calendarReducer';
import { uiReducer } from './uiReducer';

export const rootReducer =combineReducers({
    iu: uiReducer,
    calendar: calendarReducer,
    auth: authReducer
});