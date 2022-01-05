import { types } from '../types/types';


const initialState = {
    modalOpen: false
}

export const uiReducer = ( state = initialState, action ) => {

    switch( action.type ){

        case types.uiOpenmodal:
            return {
                ...state,
                modalOpen: true
            }
        break;

        default: 
            return state;
    }

}