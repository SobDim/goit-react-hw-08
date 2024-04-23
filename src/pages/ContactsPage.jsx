import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/contacts/slice.js';
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import SearchBox from '../components/SearchBox/SearchBox.jsx';
import ContactList from '../components/ContactList/ContactList.jsx';
import { fetchContacts } from '../redux/contacts/operations.js';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p className="text">...no data</p>
      )}
    </>
  );
};

export default ContactsPage;
