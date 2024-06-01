import { FaPhone, FaUserLarge } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';

import css from './Contact.module.css';
import { deleteContact } from '../../../redux/contacts/operations';

export default function Contact({ contact: { id, name, number } }) {

    const dispatch = useDispatch();

    return (
        <li className={css.contactListItem}>
            <div>
                <div className={css.contactNameSection}>
                    <FaPhone />
                    <p className={css.contactName}>{name}</p>
                </div>
                <div className={css.contactNumberSection}>
                    <FaUserLarge />
                    <p className={css.contactNumber}>{number}</p>
                </div>
            </div>
            <button onClick={() => dispatch(deleteContact(id))} type="button">Delete</button>
        </li>
    );
}