import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/operations';
import { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import { BookTwoTone } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Contact = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
        <Button onClick={handleOpen}>Edit</Button>
        <Button onClick={handleOpen}>Delete</Button>
        <Modal open={open} onClose={handleClose}>
          <Box>
            <Box>
              <h2 id="parent-modal-title">Delete</h2>
              <p id="parent-modal-description">{name}</p>
            </Box>

            <Box>
              <Button onClick={() => handleDelete(id)}> Delete</Button>
              <Button onClick={() => handleClose()}> Close</Button>
            </Box>
          </Box>
        </Modal>
      </li>
    </>
  );
};

export default Contact;
