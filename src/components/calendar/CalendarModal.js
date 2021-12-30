import React, {useState} from 'react';
import Modal from 'react-modal';


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

export const CalendarModal = () => {

    const [ isOpen, setIsOpen ] = useState(true)

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <Modal 
        className="modal"
        overlayClassName="modal-fondo"
        isOpen={ isOpen }
        // onAfterOpen={afterOpenModal}
        closeTimeoutMS={ 200 }
        onRequestClose={closeModal}
        style={customStyles}
        >
            <h1>Hola Mundo</h1>
            <hr/>
            <p>Hola de Nuevo...</p>
        </Modal>
    )
}
