import { selectContacts, selectLoading } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import Contact from './Contact/Contact';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  const contactFilter = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);

  // const getFilteredContacts = () => {
  //   return contactFilter.filter(item =>
  //     item.name.toLowerCase().includes(contactFilter.toLowerCase())
  //   );
  // };
  // const filteredContacts = getFilteredContacts();

  // if (!filteredContacts.length) {
  //   return <h2>No Data</h2>;
  // }

  return (
    <>
      {loading && <p>Loading...</p>}
      <ul>
        {contactFilter.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
