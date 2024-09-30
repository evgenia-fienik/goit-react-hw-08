import { useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { addContact, deleteContact } from "../../redux/contacts/operations";
import css from './Contact.module.css'

export default function Contact({contact}) {
    const dispatch = useDispatch();
    
    function onAdd(contact) {
      dispatch(addContact(contact));
  
    }
    function onDelete(){
        dispatch(deleteContact(contact.id));
    }
   
    return (
        <div className={css.container}>
        <div className={css.item}>
            <p className={css.element}><FaUser /> {contact?.name || 'No name available'}</p>
            <p className={css.element}><FaPhoneAlt/> {contact.number}</p>
        </div>
            <button className={css.btn} onClick={onDelete}>Delete</button>
        </div>
    );
}

