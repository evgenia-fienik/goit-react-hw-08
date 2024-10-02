import Modal from 'react-modal';
import { setCloseModal } from '../../redux/modal/slice';
import { deleteContact } from '../../redux/contacts/operations';
import { selectDeletModal } from '../../redux/modal/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentModalContact } from '../../redux/modal/selectors';

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

const ConfirmationModal=()=>{
    const dispatch = useDispatch();
    const delModal = useSelector(selectDeletModal);
    const contact = useSelector(selectCurrentModalContact);

   

    function closeModal() {
            dispatch(setCloseModal());
        }
    
    function handleDelete() {
        if (contact) {
            dispatch(deleteContact(contact.id));
            dispatch(setCloseModal());
        }
    }
return (
    <div>
        <Modal isOpen={delModal} onRequestClose={closeModal} style={customStyles}>
            <button onClick={closeModal} aria-label="close">X</button>
            <h2>Are you sure want to delete this contact?</h2>
            <button onClick={handleDelete} >Delete</button>
            <button onClick={closeModal}>Cansel</button>
        </Modal>
    </div>
);
};

export default ConfirmationModal;