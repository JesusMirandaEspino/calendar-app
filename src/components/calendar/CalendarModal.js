import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseiModal } from '../../actions/ui';
import { eventStartAddNew, eventClearActiveEvent, startEventUpdate } from '../../actions/events';

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

const initEvent = {
        title: '',
        notes: '',
        start: now.toDate(),
        end: nowPlus1.toDate()
    }

export const CalendarModal = () => {





    const dispatch = useDispatch();

    const { modalOpen } = useSelector(state => state.iu);
    const { activeEvents } =  useSelector( state => state.calendar )
    const [ dateStart, setdateStart ] = useState( now.toDate() );
    const [ dateEnd, setdateEnd ] = useState( nowPlus1.toDate() );
    const [ titleValid, setTitlevalid ] = useState( true );

    const [ formValues, setformValues ] = useState( initEvent );

    const { notes, title, start, end } = formValues;

    useEffect(() => {
        if( activeEvents ){
            setformValues( activeEvents );
        }else{
            setformValues( initEvent );
        }
    }, [activeEvents])

    const handleInputChange = ( {  target } ) => {
            setformValues({
            [target.name]: target.value
        });
    }


    const closeModal = () => {
        dispatch( uiCloseiModal() );
        dispatch(  eventClearActiveEvent() );
        setformValues(initEvent);
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

            return Swal.fire('Error', 'La fecha final debe de ser mayor a la inicial', 'error');
        }

        if( title.length > 0 || title !== '' ){

            return setTitlevalid(false);
        }

        if( activeEvents ){
            dispatch( startEventUpdate( formValues ) );
        }else{
            dispatch(  eventStartAddNew( formValues ));
        }




        setTitlevalid(true);

        closeModal();
    }

    return (
        <Modal
        className="modal"
        overlayClassName="modal-fondo"
        isOpen={  modalOpen }
        // onAfterOpen={afterOpenModal}
        closeTimeoutMS={ 200 }
        onRequestClose={closeModal}
        style={customStyles}
        >
            <h1> { ( activeEvents ) ? 'Editar Evento' :' Nuevo evento' } </h1>
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
                        className={`form-control ${ !titleValid && 'is-invalid' } `}
                        placeholder="T??tulo del evento"
                        name="title"
                        autoComplete="off"
                        value={ title }
                        onChange={ handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripci??n corta</small>
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
                    <small id="help" className="form-text text-muted">Informaci??n adicional</small>
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
