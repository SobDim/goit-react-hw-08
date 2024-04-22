import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/operations';

const Contact = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <li className={s.li_wrapper}>
        <div>
          <h3>
            <IoPerson />
            {name}
          </h3>
          <p>
            <a href={`tel:+${number}`}>
              <FaPhone />
              {number}
            </a>
          </p>
        </div>

        <button type="button" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
