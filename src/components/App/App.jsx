import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectLoading } from '../../redux/contactsSelectors'

import './App.css'

export default function App() {

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error}/>}
      <ContactForm />
      <SearchBox />
      <ContactList/>
    </div>
  );
}
