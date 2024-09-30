import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
// import { logIn } from "../../redux/auth/operations";


export default function ContactList() {
 const contacts = useSelector(selectFilteredContacts);
    
    return (
        <ul className={css.ul}>
            
            {contacts.map((item) => (
                <li className={css.li} key={item.id}>
                    <Contact contact={item} />
                </li>
                
            ))}
        </ul>
    );
}
