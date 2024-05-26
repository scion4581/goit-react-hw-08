import { useSelector } from 'react-redux';

import Contact from './Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSelectors';

import css from './ContactList.module.css';

export default function ContactList() {

    const visibleContacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.contactList}>
            {visibleContacts.map((contact) => {
                return <Contact key={contact.id} contact={contact} />
            })}
        </ul>
    );
}