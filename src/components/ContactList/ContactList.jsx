import { selectLoading } from '../../redux/contacts/contactsSlice';
import { useSelector } from 'react-redux';
import Contact from './Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const contactFilter = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);

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
