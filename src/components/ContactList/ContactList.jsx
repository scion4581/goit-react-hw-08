import Contact from './Contact/Contact';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

export default function ContactList() {

  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  const visibleContacts = selectContacts.filter((contact) => contact.name.toLocaleLowerCase().includes(selectNameFilter.toLocaleLowerCase()));

    return (
        <ul className={css.contactList}>
            {visibleContacts.map((contact) => {
                return <Contact key={contact.id} contact={contact} />
            })}
        </ul>
    );
}