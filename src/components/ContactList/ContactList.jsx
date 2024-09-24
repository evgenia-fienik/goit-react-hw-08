import { useDispatch, useSelector } from "react-redux";
import { deleteContact, restoreContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { resetFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css'


export default function ContactList() {

    const dispatch = useDispatch();

    const filteredContacts = useSelector(selectFilteredContacts);
   

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
        dispatch(resetFilter());
    };

    const handleRestore = (id) => {
  dispatch(restoreContact(id));
};
    
    return (
        <ul className={css.ul}>
            
            {filteredContacts.map(({id, name, number}) => (
                <Contact key={id} name={name} number={number} id={id} onDelete={handleDelete} onRestore={handleRestore} />
            ))}
        </ul>
    );
}
