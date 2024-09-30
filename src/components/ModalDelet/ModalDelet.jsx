import Modal from './reacr-modal'

Modal.setAppElement('#root');

export default function ModalDelet() {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Confirm Deletion"
            className={css.modal} 
            overlayClassName={css.overlay} 
        >
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this contact?</p>
            <button onClick={onConfirm}>Yes</button>
            <button onClick={onRequestClose}>No</button>
        </Modal>
    );
}