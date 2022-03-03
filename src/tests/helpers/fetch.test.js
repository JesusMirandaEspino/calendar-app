import { fetchSinToken, fetchConToken } from "../../helpers/fetch";


describe( '', () => {

    let token = '';

    test('fetchSinToken debe de funcionar', async() => {

        const resp = await fetchSinToken( 'auth', { name: 'jesus@gmail.com', password: '123456' }, 'POST' );

        expect( resp instanceof Response ).toBe( true );

        token = resp.body;

    });


    test('fetchConToken debe de funcionar', async() => {

        localStorage.setItem( 'token', token );

        const resp = await fetchConToken( 'events/sdfsf56448f15se48', {}, 'DELETE' );

        const body = resp.json();

        expect( body.msg ).toBe(undefined);

    });

});