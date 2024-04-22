// import { useEffect, useState } from 'react';

import './App.css';

import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContactsThunk } from '../redux/contactsOps';
// import contactsData from '../components/contacts.json';

function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p className="text">No Data...</p>
      )}
    </div>
  );
}

export default App;
