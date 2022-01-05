import React, { useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add( 1, 'hours' );
const nowPlus1 = now.clone().add( 1, 'hours' );

export const CalendarModal = () => {

    const [ dateStart, setdateStart ] = useState( now.toDate() );
    const [ dateEnd, setdateEnd ] = useState( nowPlus1.toDate() );
    const [ formValues, setformValues ] = useState( {
        title: 'Evento',
        notes: '',
        start: now.toDate(),
        end: nowPlus1.toDate()
    });

    const { notes, title, start, end } = formValues;

    const handleInputChange = ( {  target } ) => {
            setformValues({
            [target.name]: target.value
        });
    }

    const closeModal = () => {
        // code
    }

    const HandleStartDateChange = ( e ) => {
        setdateStart( e );
        setformValues({
            ...formValues,
            start: e
        });
    }

    const HandleEndDateChange = ( e ) => {
        setdateEnd( e );
        setformValues({
            ...formValues,
            end: e
        });
    }

    const handlesubmitForm = (e) => {
        e.preventDefault();

        const momentStart = moment( start );
        const momentEnd = moment( end );

        if( momentStart.isSameOrAfter( momentEnd ) ){
            console.log( 'Fecha 2 debe de ser mayor' );
            return;
        }

    }

    return (
        <Modal
        className="modal"
        overlayClassName="modal-fondo"
        isOpen={ true }
        // onAfterOpen={afterOpenModal}
        closeTimeoutMS={ 200 }
        onRequestClose={closeModal}
        style={customStyles}
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container"  onSubmit={ handlesubmitForm } >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                        <DateTimePicker
                            onChange={HandleStartDateChange}
                            value={ dateStart }
                            className="form-control"
                        />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                        <DateTimePicker
                            onChange={HandleEndDateChange}
                            value={  dateEnd }
                            minDate={ dateStart }
                            className="form-control"
                        />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={ title }
                        onChange={ handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={ notes }
                        onChange={ handleInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
