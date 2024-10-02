import DocumentTitle from '../DocumentTitle'
import css from './HomePage.module.css'
export default function HomePage() {
    return (
    <>
        <DocumentTitle>Home</DocumentTitle>
        <div className={css.container}>
                <h1 className={css.title}>Phonebook</h1> 
                <p>This app will help you conveniently manage your contact book. It is user-friendly: you can easily create a new contact, find the one you need, and delete it if necessary.</p>
        </div>
    </>
    )
}