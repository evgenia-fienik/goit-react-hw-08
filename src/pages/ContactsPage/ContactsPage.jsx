import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from '../../components/SearchBox/SearchBox';
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactPage() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    return (
        <>
            <ContactForm />
            <SearchBox />  
            <ContactList />
        <div>{isLoggedIn && "Request in progress..."}
            </div>
        </>
    );
};