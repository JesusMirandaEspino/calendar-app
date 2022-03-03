import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { startLogin } from '../../actions/auth';
import { types } from '../../types/types';


const middlewares = [ thunk ];
const mockStore  = configureStore( middlewares );

const initState = {};
let store = mockStore( initState );


describe( 'Pruebas con las acciones del auth', () => {

    beforeEach( () => {
        store = mockStore( initState );
    });

    test( 'StartLogin correcto', async() =>  {
        await store.dispatch( startLogin( 'jesus@gmail.com', '123456' ) );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.authLogin,
            payload: {
                uid: expect.any( String ),
                name: expect.any(String)
            }
        });

    });


});w