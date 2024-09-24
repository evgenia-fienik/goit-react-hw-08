import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from './Contact.module.css'

export default function Contact({ id, name, number, onDelete}) {
    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch(deleteContact(id));
    }
   
    return (
        <div className={css.container}>
        <div className={css.item}>
            <p className={css.element}><FaUser /> {name}</p>
            <p className={css.element}><FaPhoneAlt/> {number}</p>
        </div>
            <button className={css.btn} onClick={handleDelete}>Delete</button>
        </div>
    );
}

