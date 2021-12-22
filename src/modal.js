import './modal.css'

const Modal = ({ modalContent }) => {
    return (
        <div className='modal-div'>
            <p>{modalContent}</p>
        </div>
        )
}

export default Modal;