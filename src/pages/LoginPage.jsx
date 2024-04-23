import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations.js';
import AuthForm from '../components/AuthForm/AuthForm.jsx';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };

  function handleSubmit(values, options) {
    console.log(values);
    dispatch(login(values));
    navigate('/contacts');
    options.resetForm();
  }

  const scheme = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email!')
      .required('Required field - email'),
    password: Yup.string()
      .min(7, 'Too short password, write more 7 symbols')
      .required('Required field - password'),
  });
  return (
    <AuthForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      scheme={scheme}
      type="login"
      title="Login"
    />
  );
};

export default LoginPage;
