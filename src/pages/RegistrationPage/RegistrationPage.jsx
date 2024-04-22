import { useDispatch } from 'react-redux';
import AuthForm from '../../components/AuthForm/AuthForm.jsx';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations.js';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  function handleSubmit(values, options) {
    console.log(values);
    dispatch(register(values));
    navigate('/contacts');
    options.resetForm();
  }

  const scheme = Yup.object().shape({
    name: Yup.string()
      .min(3, '...write more 3 symbols')
      .required('Required field - name'),
    email: Yup.string()
      .email('Invalid email!')
      .required('Required field - email'),
    password: Yup.string()
      .min(6, '...write more 6 symbols')
      .required('Required field - password'),
  });
  const title = 'Register';
  return (
    <AuthForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      scheme={scheme}
      type="register"
      title={title}
    />
  );
};

export default RegistrationPage;
