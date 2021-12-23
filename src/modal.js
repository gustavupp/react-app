import { useEffect } from 'react';
import './modal.css'

const Modal = ({ alertContent, closeModal }) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            closeModal();
        },2000)
        return () => {
            clearTimeout(timeout);
        }
    })

    return (
        <div className='modal-div'>
            <p>{alertContent}</p>
        </div>
        )
}

export default Modal;