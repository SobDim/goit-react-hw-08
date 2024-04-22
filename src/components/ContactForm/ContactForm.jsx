import { useDispatch } from 'react-redux';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { addContactThunk } from '../../redux/contactsOps';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const addSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'must be more than 3')
    .max(50, 'must be less than 50')
    .required('required'),
  number: Yup.string()
    .min(3, 'must be more than 3')
    .max(13, 'must be less than 13')
    .matches(phoneRegExp, 'Please enter valid number')
    .required('required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: '', number: '' };
  const handleSubmit = (data, actions) => {
    dispatch(addContactThunk({ ...data, id: nanoid() }));
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={addSchema}
      >
        <Form className={s.wrapper}>
          <label>
            name
            <Field type="text" name="name" />
            <ErrorMessage component="span" className={s.red} name="name" />
          </label>
          <label>
            number
            <Field type="tel" name="number" />
            <ErrorMessage component="span" className={s.red} name="number" />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
